package in.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import in.main.dao.IFormRepo;
import in.main.model.FormData;

@Service
public class FormDataService implements IFormDataService {
	
	@Autowired
	private IFormRepo repo;
	
	@Override
	public String register(FormData data) {
		Integer id = repo.save(data).getId();
		return "Details are registered in Database with id :: "+ id;
	}
}
