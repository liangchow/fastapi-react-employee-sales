from sqlalchemy import Column, Integer, String
from .db import Base

class Employee(Base):
    __tablename__ = "employees"

    employee_id = Column(Integer, primary_key=True, index=True)
    employee_name = Column(String, nullable=False)
    total_sales = Column(Integer, nullable=False)