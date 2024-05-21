package in.main.tests;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import in.main.model.FormData;
import in.main.service.IFormDataService;

@SpringBootTest
public class FormDataServiceTest {
	
	@Autowired
	private IFormDataService service;
	
    @Test
    public void testRegister() {
        // Mock FormData object
        FormData formData = new FormData();
        formData.setName("Test User");
        
        LocalDate dob = LocalDate.parse("2022-01-01", DateTimeFormatter.ISO_DATE); 
        formData.setDob(Date.valueOf(dob)); //covert to java.sql.date object
        formData.setEmail("test@example.com");
        formData.setPhone("1234567890");
        formData.setProgrammingLanguage("Java");
        formData.setExperienceLevel("Intermediate");
        formData.setPreferredStack("Spring Boot");
        formData.setInterestedAreas("Backend Development");
        formData.setResume(null);

        // Call register method and verify the result
        String resultMsg = service.register(formData);

        // Assert the result
        assert resultMsg.startsWith("Details are registered in Database with id");
    }
}
