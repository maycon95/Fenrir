package Uteis;

public class Retorno {
	private String status;
	private String error;
	
	public Retorno(){
		this.status = "";
		this.error = null;
	}
	
	public Retorno(String status){
		this.status = status;
		this.error = null;
	}
	
	public Retorno(String status, String error){
		this.status = status;
		this.error = error;
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
