package in.main.dao;

import in.main.model.FormData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IFormRepo extends JpaRepository<FormData, Integer> {
	/*
	 *  All methods are given by JpaRepository --> check outline for reference
	 */
}
