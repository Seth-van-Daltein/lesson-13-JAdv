package ua.lviv.lgs.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.TimeZone;

import org.apache.log4j.xml.DOMConfigurator;


public class ConnectionUtil {
	
	private static String USER_NAME = "Maxim";
	private static String USER_PASSWORD = "Maxim12052008";
	private  static String URL = "jdbc:mysql://localhost/magazine?serverTimezone=" + TimeZone.getDefault().getID();
		
	public static Connection  openConnection() throws InstantiationException, IllegalAccessException, ClassNotFoundException, SQLException {
		DOMConfigurator.configure("loggerConfig.xml");
		Class.forName ("com.mysql.cj.jdbc.Driver").newInstance ();
		return DriverManager.getConnection (URL, USER_NAME, USER_PASSWORD);
	}	
}