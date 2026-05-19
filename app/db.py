import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv

# Load environmental variables
# load_dotenv()
# DATABASE_URL = os.getenv("DATABASE_URL")

# Create local SQLite database
DATABASE_URL = "sqlite:///./app/database.db"

# Create SQLAlchemy engine
engine = create_engine(DATABASE_URL)

# Create a configued "Session" class
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# Base class for models.py
Base = declarative_base()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()