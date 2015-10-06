/**
 * 
 */
package cn.edu.fjnu.cdio.model.coa;

import java.io.Serializable;

/**
 * @author 王燕如
 *
 */
@SuppressWarnings("serial")
public class Certificate extends ValueObject implements Serializable {
	
	
	private Long cer_ID;
	private String name;
	private String ctrain_num;
	private byte[]  coa_license;
	
	
	public void setCer_ID(Long cer_ID) {
		this.cer_ID = cer_ID;
	}
	public Long getCer_ID() {
		return cer_ID;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getName() {
		return name;
	}
	public void setCtrain_num(String ctrain_num) {
		this.ctrain_num = ctrain_num;
	}
	public String getCtrain_num() {
		return ctrain_num;
	}
	public void setCoa_license(byte[] coa_license) {
		this.coa_license = coa_license;
	}
	public byte[] getCoa_license() {
		return coa_license;
	}
	

}
