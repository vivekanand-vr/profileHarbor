package in.main.tests;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;


import in.main.model.FormData;
import in.main.restcontroller.FormController;
import in.main.service.IFormDataService;

@WebMvcTest(FormController.class)
public class FormControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IFormDataService formDataService;

    @Test
    public void testSubmitFormData() throws Exception {
        // Mock FormData object
        FormData formData = new FormData();
        formData.setName("Test User");
        // Set other properties as needed

        // Mock FormDataService behavior
        when(formDataService.register(formData)).thenReturn("Success");

        // Create a mock multi-part file
        MockMultipartFile resumeFile = new MockMultipartFile("resume", "resume.txt", MediaType.TEXT_PLAIN_VALUE, "Sample resume".getBytes());

        // Perform the request and verify the response
        mockMvc.perform(multipart("/submitFormData")
                .file("name", "Test User".getBytes())
                .file("dob", "2022-04-30".getBytes()) // Change to a valid date
                .file("email", "test@example.com".getBytes())
                .file("phone", "1234567890".getBytes())
                .file("programmingLanguage", "Java".getBytes())
                .file("experienceLevel", "Intermediate".getBytes())
                .file("preferredStack", "Spring Boot".getBytes())
                .file("interestedAreas", "Web Development".getBytes())
                .file(resumeFile))
                .andExpect(status().isOk());
    }
}
