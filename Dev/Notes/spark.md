# Spark SQL

Spark SQL is a key component of spark designed specially for structured and semi structured data.  park 
It provides the programming abstraction called Data frames.  
It provides support for various data sources means it can connect with different data sources Hive, JSON, JDBC, csv.  
Apache SQL is used to overcome limitations of Apache Hive.

### Main limitation of Hive
- Hive is built on the top of map reduce and we write query in hive then they get converted to map reduce job and have high latency.  
- When any query fails due to network issue or cluster clash then hive cannot resume from the failed queries. We need to rewrite the queries.  
- Hive supports encryption for secured databases. Hive cannot move encrypted database to trash leading execution error.

Spark SQL is a component of Apache Spark. Its not the database like MySQL and other. It is a processing engine for structured and semi structured data.

### Working Steps
- **Data Ingestion** -> can read data from different data sources (from files, Bigdata(HDFS, Hive), Databases)  
- **Schema Detection and Registration** -> we do not need to infer schema it infers automatically from data source  
- **Query Execution** -> we can use SQL queries or can use Data Frame APIs for data manipulation  
- **Optimization** -> catalyst optimizer is advanced query optimizer and writes query for efficiency. Chooses best execution plan to execute for better performance. Tungsten Engine is low level optimization engine which uses in-memory binary format for data. tungsten minimize the cpu overheads. 
- **Distributed Processing and Results** -> as collect here we use `.show()` to display output of queries  

### Spark SQL Architecture
Spark sql is fully Integrated with other components of Apache spark 
Uniform Data Access -> unified way to access data from 
hive compatibility -> 

### Data Frames
A df is the collection of row and col. Built on the top of RDD but offers a better optimization. 

### Features of DF in Spark SQL
- Schema Enforcement - Each col in df has a name and a data type
- Optimized Performance - Uses Catalyst optimizer and tungsten for memory and cpu efficiency.
- Multilanguage support - Available in scala, python, java, R
- Compatibility with SQL - DFs are compatable with SQL 
- Working with Multiple Data Sources - Supports JSON , Paraquet, Avro, Hive, JDBC

### Ways to create DF
- **Local Collection** - We use toDF()
- **From RDD** - Using toDF() on rdd
