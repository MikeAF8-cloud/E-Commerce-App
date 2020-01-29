package com.example.backendjava.templates;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.sql.Blob;
import java.sql.SQLException;

import javax.imageio.ImageIO;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.sql.rowset.serial.SerialBlob;

import org.apache.tomcat.util.codec.binary.Base64;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.JsonObject;

@Entity
@Table(name = "Products")
public class ProductTemplate {

	@Id
	@JoinColumn(name = "productID")
	@GenericGenerator(name = "num_gen", strategy = "com.example.backendjava.utils.NumericGenerator",
			parameters = {
					@Parameter(name = "value", value = "57")
			}
	)
	@GeneratedValue(strategy = GenerationType.AUTO, generator="num_gen")
	private long productID;
	
	@JsonProperty(value = "title")
	@Column(name = "title")
	private String title;
	
	@JsonProperty(value = "price")
	@Column(name = "price")
	private float price;
	
	@JsonProperty(value = "category")
	@Column(name = "category")
	private String category;
	
	@JsonProperty(value = "imageUrl")
	@Column(name = "imageUrl")
	private String imageUrl;

	@Lob
	@Column(name = "image")
	private Blob image = null;
	
	public long getProductID() {
		return productID;
	}

	public void setProductID(long productID) {
		this.productID = productID;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public Blob getImage() {
		return image;
	}

	public void setImage(String imageUrl) throws IOException, SQLException {
		URL url = new URL(imageUrl);
		BufferedImage originalImage = ImageIO.read(url);
		ByteArrayOutputStream output = new ByteArrayOutputStream();
		
		try {
			ImageIO.write(originalImage, getImageExt(), output);			
		} catch (IOException e) {
			throw new IOException("Image could not be retrieved");
		} finally {
			output.close();
		}
		
		try {
			this.image = new SerialBlob(output.toByteArray());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new SQLException("Could not convert image to blob");
		}
	}
	
	public JsonObject toJsonObject(boolean imageFlag) {
		byte[] encodedBase64 = null;
		if(imageFlag) {	
			byte[] image = null;
			try {
				ByteArrayOutputStream baos = new ByteArrayOutputStream();
				InputStream in =  this.image.getBinaryStream();
				image = new byte[(int) this.image.length()];
				
				int n = 0;
			    while ((n=in.read(image))>=0)
			    {
			        baos.write(image, 0, n);
			    }
			    in.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			encodedBase64 = Base64.encodeBase64(image);
		}
		
		JsonObject jbo = new JsonObject();
		try {
			jbo.addProperty("id", this.productID);
			jbo.addProperty("title", this.title);
			jbo.addProperty("price", this.price);
			jbo.addProperty("category", this.category);
			jbo.addProperty("imageUrl", this.imageUrl);
			if (imageFlag) {
				jbo.addProperty("image", new String(encodedBase64, "UTF-8"));				
			}
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return jbo;
	}
	
	private String getImageExt() {
		String imageExt = "";
		if (imageUrl.contains("png")) {
			imageExt = "png";
		} else if (imageUrl.contains("jpg")) {
			imageExt = "jpg";
		} else if (imageUrl.contains("jpeg")) {
			imageExt = "jpeg";
		} else if (imageUrl.contains("gif")) {
			imageExt = "gif";
		} else if (imageUrl.contains("png")) {
			imageExt = "png";
		} else if (imageUrl.contains("svg")) {
			imageExt = "svg";
		}
		return imageExt;
	}
}
