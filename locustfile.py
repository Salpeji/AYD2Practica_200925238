from locust import HttpUser, task

class HelloWorldUser(HttpUser): 
	@task 
	def consultaEstudiante(self): 
		self.client.get("/")