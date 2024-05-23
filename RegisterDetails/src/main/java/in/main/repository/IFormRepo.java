package in.main.repository;

import in.main.model.FormData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IFormRepo extends JpaRepository<FormData, Integer> {
	
}
