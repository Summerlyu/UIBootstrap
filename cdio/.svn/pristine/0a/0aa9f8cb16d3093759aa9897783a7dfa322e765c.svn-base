package cn.edu.fjnu.cdio.lucene.res;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.TokenStream;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.Term;
import org.apache.lucene.queryParser.MultiFieldQueryParser;
import org.apache.lucene.queryParser.ParseException;
import org.apache.lucene.search.CachingWrapperFilter;
import org.apache.lucene.search.Filter;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.QueryWrapperFilter;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TermQuery;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.search.highlight.Highlighter;
import org.apache.lucene.search.highlight.InvalidTokenOffsetsException;
import org.apache.lucene.search.highlight.QueryScorer;
import org.apache.lucene.search.highlight.SimpleHTMLFormatter;
import org.apache.lucene.search.highlight.SimpleSpanFragmenter;
import org.apache.lucene.search.highlight.TokenSources;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.FSDirectory;
import org.apache.lucene.util.Version;
import org.wltea.analyzer.lucene.IKAnalyzer;
import org.wltea.analyzer.lucene.IKSimilarity;

import cn.edu.fjnu.cdio.model.res.SearchResult;

/**
 * @author 林劭苾
 * 
 * @version 创建时间：2013-05-20 下午 11:42
 * 
 */

public class LuceneSearch {

	private static final String INDEXPATH = "/LuceneIndex"; //存放索引的目录
	private Analyzer analyzer;
	private Directory directory;
//	private SearcherManager searcherManager;
	private IndexSearcher searcher;
	private SimpleHTMLFormatter formatter;
    private int pageNum; //记录分页总页数

	public LuceneSearch() {

		analyzer = new IKAnalyzer();
		formatter = new SimpleHTMLFormatter("<span style=\"color:#f97956\">",
				"</span>");
		try {
			directory = FSDirectory.open(new java.io.File(INDEXPATH));
//			searcherManager = new SearcherManager(directory);
			searcher = new IndexSearcher(directory);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//		searcher = searcherManager.get();
		searcher.setSimilarity(new IKSimilarity()); // 在索引器中使用IKSimilarity相似度评估器
	}

	/**
	 * 用于全文搜索
	 * 
	 * @param keywords
	 *            搜索关键字
	 * @param type
	 *            搜索文档类型
	 * @return 返回搜索结果集
	 */
	public List<SearchResult> fullTextSearch(String keywords, String type, int pageSize, int currentPage) {

		List<SearchResult> searchList = new ArrayList<SearchResult>(); // 用于存放结果集
		int totalRecord = 0; //用于存放搜索总数
		int begin; //存放开始结果集下标
		int end; //存放结束结果集下标

		try {

			MultiFieldQueryParser queryParser = new MultiFieldQueryParser(
					Version.LUCENE_31, new String[] { "title", "content",
							"contentDetail" }, analyzer);
			Query query = queryParser.parse(keywords);
			TopDocs topDocs = null;

			/* 实现文档类型搜索 */
			if (type.equals("all")) {
				topDocs = searcher.search(query, 100);
			} else {
				Filter filter = new QueryWrapperFilter(new TermQuery(new Term(
						"type", type)));
				CachingWrapperFilter cachingWrapperFilter = new CachingWrapperFilter(
						filter); // 对过滤结果进行缓存
				topDocs = searcher.search(query, cachingWrapperFilter, 100);
			}
			
			begin = (currentPage - 1)*pageSize;
			end = Math.min(begin + pageSize, topDocs.scoreDocs.length);
			
			totalRecord = topDocs.scoreDocs.length;
			
			this.pageNum = 
					(totalRecord % pageSize == 0 ? totalRecord/pageSize : totalRecord/pageSize+1);//记录页数

			/* 设置高亮 */
			QueryScorer scorer = new QueryScorer(query);
			Highlighter highlighter = new Highlighter(formatter, scorer);
			highlighter.setTextFragmenter(new SimpleSpanFragmenter(scorer));

			for (int i = begin; i<end; i++) {

				SearchResult result = new SearchResult();
				Document document = searcher.doc(topDocs.scoreDocs[i].doc);

				String resId = document.get("resId");
				String title = document.get("title");
				String content = document.get("content");
				String uploadDate = document.get("uploadDate");
				String resType = document.get("type");
				String resHttpPath = document.get("resHttpPath");
				String author = document.get("author");

				TokenStream titleStream = TokenSources.getAnyTokenStream(
						searcher.getIndexReader(), topDocs.scoreDocs[i].doc, "title", analyzer);
				TokenStream contentStream = TokenSources.getAnyTokenStream(
						searcher.getIndexReader(), topDocs.scoreDocs[i].doc, "content", analyzer);

				String titleFragement = highlighter.getBestFragment(
						titleStream, title);
				String contentFragement = highlighter.getBestFragment(
						contentStream, content);

				if (titleFragement == null)
					result.setTitle(title);
				else
					result.setTitle(titleFragement);

				if (contentFragement == null)
					result.setContent(content);
				else
					result.setContent(contentFragement);

				result.setResId(resId);
				result.setUploadDate(uploadDate);
				result.setResHttppath(resHttpPath);
				result.setResType(resType);
				result.setAuthor(author);

System.out.println("搜索结果：" + result.toString());
				searchList.add(result);
			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (InvalidTokenOffsetsException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		} finally {
			try {
//				searcherManager.release(searcher);
				searcher.close();
				directory.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}

		return searchList;
	}

	/**
	 * 用于相关文档搜索
	 * 
	 * @param keywords
	 * @return
	 */
	public List<SearchResult> relativeSearch(String keywords) {

		List<SearchResult> searchList = new ArrayList<SearchResult>(); // 用于存放结果集

		try {

			MultiFieldQueryParser queryParser = new MultiFieldQueryParser(
					Version.LUCENE_31,
					new String[] { "title", "contentDetail" }, analyzer);
			Query query = queryParser.parse(keywords);
			TopDocs topDocs = searcher.search(query, 6); // 找出6条相关文档

			// 输出结果(除去匹配的第一条文档)
			ScoreDoc[] sd = topDocs.scoreDocs;
			for (int i = 1; i < sd.length; i++) {

				SearchResult result = new SearchResult();
				Document document = searcher.doc(sd[i].doc);

				String resId = document.get("resId");
				String title = document.get("title");
				String resType = document.get("type");
				String resHttpPath = document.get("resHttpPath");

				result.setResId(resId);
				result.setTitle(title);
				result.setResHttppath(resHttpPath);
				result.setResType(resType);

System.out.println("搜索结果：" + result.toString());
				searchList.add(result);

			}
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		} finally {

			try {
//				searcherManager.release(searcher);
				searcher.close();
				directory.close();
			} catch (IOException e) {
				e.printStackTrace();
			}

		}
		return searchList;
	}

	public int getPageNum() {
		return pageNum;
	}

	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	
}
