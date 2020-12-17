CREATE DATABASE IF NOT EXISTS Weekdoes;
USE Weekdoes;

CREATE TABLE IF NOT EXISTS Todoes(
	TodoId int NOT NULL AUTO_INCREMENT,
    todotext VARCHAR(100) NOT NULL,
    deadline TIME NOT NULL,
    done BOOL,
    PRIMARY KEY (TodoId)
);

CREATE TABLE IF NOT EXISTS weekdoes (
	weekdoid int NOT NULL AUTO_INCREMENT,
    dato DATETIME NOT NULL,
    TodoId int,
    PRIMARY KEY (weekdoid),
    FOREIGN KEY (TodoId) REFERENCES Todoes(TodoId)
);

INSERT INTO Todoes(todotext, deadline, done) VALUE('todo dummy 1', '08:00:00', False);
INSERT INTO Todoes(todotext, deadline, done) VALUE('todo dummy 2', '08:00:00', False);
INSERT INTO Todoes(todotext, deadline, done) VALUE('todo dummy 3', '08:00:00', False);


#INSERT INTO weekdoes(dato, TodoID, done) VALUE('todo dummy 1', '08:00:00', False);


