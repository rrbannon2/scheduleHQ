import psycopg2
from psycopg2 import sql
conn = psycopg2.connect(host='localhost',database='roybannon',user = 'roybannon')
cur = conn.cursor()
zero_val_array = '{0,0,0,0,0,0,0,0,0,0,0,0,0,0}'
# cur.execute("DROP TABLE employees")
# cur.execute("CREATE TABLE employees(id int, first_name varchar(255), last_name varchar(255), role int, wage int)")
# cur.execute("DROP TABLE availability")
# cur.execute(sql.SQL("CREATE TABLE availability(id int, shift_pref integer ARRAY[28] DEFAULT %s)"),[zero_val_array])
# cur.execute("SELECT * FROM employees")
# print(cur.fetchall())
# # cur.execute("insert into availability Values(30,zero_val_array)")
# # cur.execute(sql.SQL("UPDATE availability SET shift_pref[%s:%s] = %s WHERE id = %s"),['1','168',zero_val_array,'30'])
# # cur.execute("select * from availability")
# print(cur.fetchall())
# cur.execute("DROP TABLE skills")
# cur.execute("CREATE TABLE skills(skill varchar(255), id int, skill_level int)")
# cur.execute("DROP TABLE required_skills_for_shift")
# cur.execute("CREATE TABLE required_skills_for_shift(skill varchar(255), schedule_blocks integer ARRAY[14], importance int, role int)")
# cur.execute("DROP TABLE hours_extremes")
# cur.execute("DROP TABLE extremes")
# cur.execute("CREATE TABLE extremes(id int, min_shift int DEFAULT 0, max_shift int DEFAULT 24, min_weekly int DEFAULT 0, max_weekly int DEFAULT 120, min_days int DEFAULT 0, max_days int DEFAULT 7)")
# cur.execute("SELECT * FROM employees")
# print(cur.fetchall())
# cur.execute("SELECT * FROM extremes")
# print(cur.fetchall())

# cur.execute("INSERT INTO variables VALUES('skill_to_edit', 'none')")
# cur.execute("ALTER TABLE employees ADD CONSTRAINT emp_id PRIMARY KEY (id)")
# cur.execute("ALTER TABLE availability ADD CONSTRAINT avail_id PRIMARY KEY (id)")
# cur.execute("ALTER TABLE extremes ADD CONSTRAINT extremes_id PRIMARY KEY (id)")
# cur.execute("DELETE FROM skills WHERE id = 5")

# cur.execute("ALTER TABLE skills ADD CONSTRAINT skill_lvls_primary PRIMARY KEY (skill, id)")
# cur.execute("INSERT INTO skills VALUES ('Sign Audit', 1, 1)")
# cur.execute("INSERT INTO skills VALUES ('Count Drawers', 1, 0)")
# cur.execute("CREATE TABLE business_info(business_name varchar(255), hours_of_op integer ARRAY[28], min_employees int, min_managers int, exempt_role int,max_total_hours int, max_hours_importance int)")
# cur.execute("DROP TABLE shifts")
# cur.execute("CREATE TABLE shifts(shiftName varchar(255), schedule_blocks integer ARRAY[14], importance int, maxHours int)")
# cur.execute("CREATE TABLE saved_schedule()")
# cur.execute("DROP TABLE users")
# cur.execute("CREATE TABLE users(user_id SERIAL,email varchar(255),salt int ,salted_password varchar(255))")
# cur.execute("ALTER TABLE users ADD CONSTRAINT emails_primary PRIMARY KEY (email)")

conn.commit()
cur.close()
conn.close()
