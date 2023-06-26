CREATE TABLE [dbo].[Request]
(
  [Id] INT NOT NULL PRIMARY KEY
  [Name] NVARCHAR,
  [id_responsible] INT NOT NULL,
  [Getting_started] DATA,
  [End_of_work] DATA,
  [id_city] INT NOT NULL,
  [Type_of_work] NVARCHAR,
  [Chart] NVARCHAR,
  [Office] NVARCHAR,
  [id_Project] INT NOT NULL,
  [id_Financing] INT NOT NULL,
  [Task_Description] NVARCHAR,
  [id_Competence] INT NOt NULL,
  [Grade] INT,
  [Number_of_specialists] INT,
  [Requirements] NVARCHAR,
  [Responsibilities] NVARCHAR,
  [Additional_requirements] NVARCHAR
)
