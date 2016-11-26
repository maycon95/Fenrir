package Uteis;

public class Retorno {
	private String status;
	private String error;
	
	public Retorno(){}
	
	public Retorno(String status){
		this.status = status;
		this.error = null;
	}
	
	public String getStatus() {
		return status;
	}

	public String getError() {
		return error;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public void setError(String error) {
		this.error = error;
	}

}
