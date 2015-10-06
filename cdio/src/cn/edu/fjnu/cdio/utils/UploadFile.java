package cn.edu.fjnu.cdio.utils;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.security.MessageDigest;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 
 * @className:UploadFile.java
 * 
 * @classDescription: 用于文件
 * 
 * @author:杨丽
 * 
 * @createTime:2012-12-30 下午2:47:18
 */

public class UploadFile {
	
	private static final int BUFFER_SIZE=16*1024;

	/**
	 * 
	 * @Description: 上传图片到服务器
	 * @author:杨丽
	 * @createTime: 2012-12-31 上午11:52:20
	 * @param savePath
	 *            保存的地址
	 * @param savefile
	 *            需要保存的文件
	 * @param picture
	 *            文件名
	 * @param prefix
	 *            文件需要加的前缀 如p
	 * @return null 上传失败，不等于null 成功，返回的是图片保存新名字
	 */
	public String upload(String savePath, File savefile, String fileName,
			String prefix) {

		String newSavePath = null;
		String filename = "";
		try {

			// 得到新的图片名字
			filename = getPicName(fileName, prefix);

			newSavePath = savePath + "\\" + filename;

			// 输出流
			FileOutputStream fos = new FileOutputStream(newSavePath);

			// 输入流

			FileInputStream fis = new FileInputStream(savefile);

			byte[] buffer = new byte[1024];
			int len = 0;
			while ((len = fis.read(buffer)) > 0) {
				fos.write(buffer, 0, len);
			}
			fos.close();

		} catch (Exception e) {
			e.printStackTrace();
			newSavePath = null;

		}

		return filename;

	}

	/**
	 * 
	 * @Description: 读出文件名，再把文件名用当前的时间重命名
	 * @author:杨丽
	 * @createTime: 2012-12-31 上午11:51:16
	 * @param filename
	 *            文件所在位置
	 * @return
	 */
	public String getPicName(String filename, String prefix) {
		String picName = "";

		if (filename != null) {

			String[] str2 = filename.split("\\.");

			String type = str2[str2.length - 1];
			type = "." + type;
			Date date = new Date();

			picName = prefix + dateToYMD(date) + type;

		}

		return picName;
	}

	/**
	 * 
	 * @Description: 根据文件名，得到文件的扩展名 如 123.txt 得到 .txt
	 * @author:杨丽
	 * @createTime: 2013-1-24 上午10:55:30
	 * @param fileName
	 * @return
	 */
	public String getFileType(String fileName) {
		String fileType = null;

		String[] strs = fileName.split("\\.");
		if (strs.length > 1) {
			fileType = "." + strs[strs.length - 1];
		}

		return fileType;
	}

	/**
	 * 
	 * @Description: 把Date转换为String
	 * @author:杨丽
	 * @createTime: 2012-12-31 上午9:19:59
	 * @param dt
	 * @return
	 */
	public static String dateToYMD(Date dt) {
		SimpleDateFormat sdFormat = new SimpleDateFormat("yyyyMMddHHmmss");
		String str = "";
		try {
			str = sdFormat.format(dt);
		} catch (Exception e) {
			return "";
		}
		if (str.equals("1900-01-01")) {
			str = "";
		}

		return str;
	}

	/**
	 * 
	 * @Description:
	 * @author:陈徽徽
	 * @createTime:
	 * @param
	 * @return
	 */
	public static String sha1(File f) throws Exception {
		InputStream fis = new FileInputStream(f);

		byte[] buffer = new byte[1024];
		MessageDigest sha1 = MessageDigest.getInstance("SHA1");
		int n;
		do {
			n = fis.read(buffer);
			if (n > 0) {
				sha1.update(buffer, 0, n);
			}
		} while (n != -1);

		fis.close();

		byte[] b = sha1.digest();

		StringBuffer r = new StringBuffer();
		for (int i = 0; i < b.length; i++) {
			r.append(Integer.toString((b[i] & 0xff) + 0x100, 16).substring(1));
		}

		return r.toString();

	}

	/**
	 * 
	 * @Description:
	 * @author:陈徽徽
	 * @createTime:
	 * @param
	 * @return
	 */

	// 以返回的sha是否为空判断文件上传是否成功
	public String copy(File src, File dst) {
		String unitSha = null;
		InputStream inputStream = null;
		OutputStream outputStream = null;
		try {
			inputStream = new BufferedInputStream(new FileInputStream(src),
					BUFFER_SIZE);
			outputStream = new BufferedOutputStream(new FileOutputStream(dst),
					BUFFER_SIZE);
			byte[] buffer = new byte[BUFFER_SIZE];
			int len = 0;
			while ((len = inputStream.read(buffer)) > 0) {

				outputStream.write(buffer, 0, len);

			}
			try {
				unitSha = sha1(src);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}// 得到文档唯一的编码

		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if (inputStream != null)
					inputStream.close();
				if (outputStream != null)
					outputStream.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return unitSha;

	}

	public static void main(String[] args) throws IOException {
		UploadFile UploadFile = new UploadFile();
		/*
		 * String savePath="D:\\yangli\\educube\\.metadata\\.me_tcat\\webapps";
		 * String
		 * oldPath="E:\\Users\\hub\\Pictures\\yangli\\新建 Microsoft Word 文档.doc";
		 * File file=new File(oldPath); UploadFile.upload(savePath, file,
		 * "新建 Microsoft Word 文档.doc", "t");
		 * UploadFile.getPicName("7b1da437d3222be4a3cc2bb8.jpg", "s");
		 */

		UploadFile.getFileType("7b1da437d3222be4a3cc2bb8.jpg");

		System.out.println(UploadFile
				.getFileType("7b1da437d3222be4a3cc2bb8.jpg"));
		{
			// System.out.println(UploadPicture.upload(savePath, oldPath,"s"));
		}

	}

}
