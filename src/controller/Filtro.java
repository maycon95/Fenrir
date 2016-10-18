package controller;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@WebFilter("/Controller/*")
public class Filtro implements Filter {


    public Filtro() {
    }


	public void destroy() {
	}


	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		
		String uri = req.getRequestURI();
		
		HttpSession session = req.getSession();
		String usuarioLogado = (String) session.getAttribute("usuarioLogado");
		
		String controller = uri.substring(uri.lastIndexOf("/"), uri.length());
		
		if(!controller.equals("/Login")){
			//VERIFICO SE O USUARIO ESTA LOGADO
			if(usuarioLogado == null){
				//SE NAO ESTIVER LOGADO RETORNA UM ERRO PARA VOLTAR A TELA DE LOGIN
				response.getWriter().write("connection_lost");
				return;
			}
		}
		
		chain.doFilter(request, response);
	}

	public void init(FilterConfig fConfig) throws ServletException {
	}
}
