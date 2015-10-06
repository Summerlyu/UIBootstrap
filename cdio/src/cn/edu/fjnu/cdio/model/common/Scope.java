package cn.edu.fjnu.cdio.model.common;

import java.io.Serializable;
import java.util.LinkedHashSet;
import java.util.Set;

import org.hibernate.search.annotations.Field;
import org.hibernate.search.annotations.Index;
import org.hibernate.search.annotations.Store;

/**
 * 分类范围表
 * 
 * @author 温武汉
 */
@SuppressWarnings("serial")
public class Scope implements Serializable {
	/**
	 * 自动生成（主键）
	 */
	private Long scopeId;
	/**
	 * 分类范围的名称
	 */
	@Field(index=Index.TOKENIZED, store=Store.YES)
	private String name;
	/**
	 * 当前分类在这它父范围的下层范围中的顺序
	 */
	private Integer sequence;
	/**
	 * 层次（1是最顶层，5是最底层）
	 */
	private Integer level;
	/**
	 * 上层的id（外键）空表示是最顶层
	 */
	private Scope parentScope;
	/**
	 * 自己下层的范围
	 */
	private Set<Scope> scopes = new LinkedHashSet<Scope>();

	public Scope() {
		super();
	}

	public Scope(Long scopeId) {
		super();
		this.scopeId = scopeId;
	}

	public Scope(String name, Integer sequence, Integer level, Scope parentScope) {
		super();
		this.name = name;
		this.sequence = sequence;
		this.level = level;
		this.parentScope = parentScope;
	}

	public Long getScopeId() {
		return scopeId;
	}

	public void setScopeId(Long scopeId) {
		this.scopeId = scopeId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getSequence() {
		return sequence;
	}

	public void setSequence(Integer sequence) {
		this.sequence = sequence;
	}

	public Integer getLevel() {
		return level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}

	public Scope getParentScope() {
		return parentScope;
	}

	public void setParentScope(Scope parentScope) {
		this.parentScope = parentScope;
	}

	public Set<Scope> getScopes() {
		return scopes;
	}

	public void setScopes(Set<Scope> scopes) {
		this.scopes = scopes;
	}

	@Override
	public String toString() {
		return "Scope [scopeId=" + scopeId + ", name=" + name + ", sequence="
				+ sequence + ", level=" + level + "]";
	}

}
