package in.main.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.Data;

@Data
@Entity
public class FormData {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
    private String name;
    private Date dob;
    private String email;
    private String phone;
    private String programmingLanguage;
    private String experienceLevel;
    private String preferredStack;
    private String interestedAreas; 
    
    @Lob
    private byte[] resume;
}