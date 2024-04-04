package in.main.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import in.main.model.FormData;
import in.main.service.IFormDataService;

@RestController
public class FormController {
	
	@Autowired
	private IFormDataService service;
	
    @PostMapping("/submitFormData")
    public ResponseEntity<String> submitFormData(@RequestBody FormData formData) {
        
    	try {
			String resultMsg = service.register(formData);
			return new ResponseEntity<String>(resultMsg, 
					HttpStatus.OK);
		} 
		catch (Exception e) {
			return new ResponseEntity<String>("Details not registered",
					HttpStatus.INTERNAL_SERVER_ERROR);																											
		}
    }
}