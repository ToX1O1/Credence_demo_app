# Copyright (c) 2024, abhi and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Task(Document):
	@frappe.whitelist()
	def printline():
		return "hellow world"


@frappe.whitelist()
def frm_call():
		data = frappe.db.sql("""
						SELECT
    						Mutual_Fund,
   	 						SUM(CASE WHEN Trade_Type = 'BUY' THEN Quantity ELSE -Quantity END) AS Quantity
						FROM
    						tabTask
						GROUP BY
    						Mutual_Fund;
								
					   		""",as_dict=True)
		
		
		# a=[]
		# for i in data:
		# 	for key,value in i.items(): 
		# 		a.append(value)
		# print(a) #list of dic
		print(data)
		return data
		

	



			
				
	
