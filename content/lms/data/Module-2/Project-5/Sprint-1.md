---
navTitle: "Sprint 1"
title: "Intermediate SQL"
metaTitle: "Welcome to Sprint 1"
metaDescription: "Data Science Course"
access: data
# prev: 'data/Module-1/Project-4/Sprint-1'
# next: 'data/Module-1/Project-4/Sprint-3'
---

In this sprint, we'll be performing intermediate SQL exercises.

## Epic 1: SQL in the job market

Log into your LinkedIn account and navigate to the Job section. Search for 'SQL' and filter the results by the territory of your choice (Berlin, Germany, or any other). Add another filter for 'Experience level' to set it to 'Entry level.' Read a few job postings to see what SQL knowledge companies look for when hiring for their Data team. Save them for later reference when you're applying for jobs.

## Epic 2: Design your first database

As a VS Group BI analyst, you've received a CSV document with all the sales data. You can download the file **[here](https://drive.google.com/file/d/1j3BVqD5_KDfvXdljnZ7beV-G-FVS8df5/view?usp=share_link)**.

Open the file and try to understand how the fields are related. We suggest using Pandas at this stage to inspect and prepare the data into CSV files which will become the database tables.
Note that this approach would not be possible with very large datasets. In these cases you could import a portion of the data to get a feel for the structure and content (e.g. 100K rows).

In order to split the file into tables, we need to have a grasp on database design. This article offers handy tips to design your first database: [Database design basics](https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5). Be aware that database design principles are mastered over the years through real-world experience. It is also important to note that this is an iterative process - you are not likely to create the perfect design in your first pass.

Remember to carefully select your primary and, if necessary, foreign keys for each table.

Use a program of your preference that will allow you to make a sketch to present your diagram- you can also do this by hand. However, we recommend [DBDiagram.io](https://dbdiagram.io/home) for this.

Now that you have done the initial design for your ERD:

- Can you explain why dividing the information into several tables is preferable instead of keeping it in a single table?

- How would you manage tables with unique rows such as customers, products, etc.?

- Is there any need to create a new column or columns in any of the tables that are not available in the Sample-Superstore.csv (e.g. Supplier price)?

**You can decide which RDBMS you prefer to use; SQLite, MySQL, or PostgreSQL.**

- [MySQL](https://dev.mysql.com/downloads/workbench/)
- [SQLite](https://www.sqlite.org/index.html)
- [PostgreSQL](https://www.postgresql.org/download/)

Some of the RDBMS do not support generating an ERD.

**Note: The basic steps remain the same regardless of what RDBMS you use. However, we will use SQLite for the examples in the LMS.**

**_Please use the documentation of the RDBMS or Google for a solution if you choose an alternative to SQLite._**

## Epic 3: Loading your database into an RDBMS

Not all RDBMS support Excel files,including SQLite. We will use Python to connect to SQLite and create a database. [Here is an example](https://colab.research.google.com/drive/19ts1DtmcWnSV3dlEyVz0zLfHrQv4IDkh) of the process if you need, but try it yourself first.

You will frequently find yourself in a situation where you're new to a program or performing a task you've never done before. Therefore, it is important to be self-reliant and be able to read the program's documentation or find a solution online. Sometimes, despite following every step as it is written in a well-written tutorial, the code will still not work. In this instance, look through several sources, and perform trial and error until you figure it out.

**If you are using SQLite**, you can use these two articles:

- [Turn Your Excel Workbook Into a SQLite Database](https://towardsdatascience.com/turn-your-excel-workbook-into-a-sqlite-database-bc6d4fd206aa)

- [SQLite using Python](https://www.geeksforgeeks.org/sql-using-python/).

Remember that the process may differ depending on the RDBMS you use, so read the documentation and different tutorials to complete the task successfully.

## Epic 4: Perform some queries

After you've loaded your database in your RDBMS, the priority is to solve all the business questions using SQL queries instead of Pandas dataframe commands:

1. What is the category generating the maximum sales revenue?

   - What about the profit in this category?
   - Are they making a loss in any categories?

2. What are 5 states generating the maximum and minimum sales revenue?

3. What are the 3 products in each product segment with the highest sales?

   - Are they the 3 most profitable products as well?

4. What are the 3 best-seller products in each product segment? (Quantity-wise)

5. What are the top 3 worst-selling products in every category? (Quantity-wise)

6. How many unique customers per month are there for the year 2016. (_There's a catch here: contrary to other 'heavier' RDBMS, SQLite does not support the functions YEAR() or MONTH() to extract the year or the month in a date. You will have to create two new columns: year and month._)

[Here is an example](https://colab.research.google.com/drive/17bj8p6z52srkT13IEhCxBYS3JCNNgkYL) of how a database connection and query could look.

**Learning Objectives:**

- Review previous SQL knowledge
- SQL Window functions and PARTITION BY clause

**Estimated time: 1 week**
