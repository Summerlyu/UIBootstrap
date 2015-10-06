package cn.edu.fjnu.cdio.model.pym;



@SuppressWarnings("serial")
public class DoDetail {

	private int DeId;     //id
	private Double ep;       //点数值
	private Donation fromDonation;  //捐献者
	private ReceiveGrant toReceive; //受助者
	
	public int getDeId() {
		return DeId;
	}
	public void setDeId(int deId) {
		DeId = deId;
	}
	public Double getEp() {
		return ep;
	}
	public void setEp(Double ep) {
		this.ep = ep;
	}
	public Donation getFromDonation() {
		return fromDonation;
	}
	public void setFromDonation(Donation fromDonation) {
		this.fromDonation = fromDonation;
	}
	public ReceiveGrant getToReceive() {
		return toReceive;
	}
	public void setToReceive(ReceiveGrant toReceive) {
		this.toReceive = toReceive;
	}

}
