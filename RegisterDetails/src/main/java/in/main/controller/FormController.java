package in.main.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import in.main.model.FormData;
import in.main.repository.IFormRepo;

@RestController
public class FormController {
	
	@Autowired
	private IFormRepo repo;
	
    @PostMapping(value = "/submitFormData", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE,
    												MediaType.APPLICATION_OCTET_STREAM_VALUE })
    public ResponseEntity<String> submitFormData(
            @RequestPart("name") String name,
            @RequestPart("dob") String dobStr, 
            @RequestPart("email") String email,
            @RequestPart("phone") String phone,
            @RequestPart("programmingLanguage") String programmingLanguage,
            @RequestPart("experienceLevel") String experienceLevel,
            @RequestPart("preferredStack") String preferredStack,
            @RequestPart("interestedAreas") String interestedAreas,
            @RequestPart("resume") MultipartFile resume){
    
    try {		
	    	FormData formData = new FormData();
	        formData.setName(name);
	        LocalDate dob = LocalDate.parse(dobStr, DateTimeFormatter.ISO_DATE); 
	        formData.setDob(Date.valueOf(dob));
	        
	        formData.setEmail(email);
	        formData.setPhone(phone);
	        formData.setProgrammingLanguage(programmingLanguage);
	        formData.setExperienceLevel(experienceLevel);
	        formData.setPreferredStack(preferredStack);
	        formData.setInterestedAreas(interestedAreas);
	        formData.setResume(resume.getBytes());
        
	        // save the data to database
	        Integer id = repo.save(formData).getId();
	        String response = "Details are registered in Database with id :: "+ id;
			return new ResponseEntity<String>(response, HttpStatus.OK);
		} 
		catch (Exception e) {
			return new ResponseEntity<String>("Details not registered",
					HttpStatus.INTERNAL_SERVER_ERROR);																											
		}
    }
}