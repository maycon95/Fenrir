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
		
		System.out.println(uri);
		
		HttpSession session = req.getSession();
		String usuarioLogado = (String) session.getAttribute("usuarioLogado");
		
		if(usuarioLogado == null) System.out.println("offline");
		else System.out.println("online user: " + usuarioLogado);
		
		chain.doFilter(request, response);
	}


	public void init(FilterConfig fConfig) throws ServletException {
	}

}
