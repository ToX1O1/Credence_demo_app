// Copyright (c) 2024, abhi and contributors
// For license information, please see license.txt

frappe.ui.form.on("Task", {
 	refresh(frm) {
        frm.add_custom_button('process_Data',() =>{

            window.location.href = 'http://development.localhost:8000/webpage_credence';
            frappe.call(
                {
                // doc:frm.doc,
                method:"demo_app.credence.doctype.task.task.frm_call",
                freeze:true,
                callback:function(r){
                
                    frappe.msgprint("hello")
                    // var data = JSON.parse(r.message);
                    frappe.msgprint(r)

                    // r = r.message;
                    // frappe.msgprint("id",r.message.Quality)
                    // tasks.forEach(function(task){
                    //     frappe.msgprint('Task ID:', (task));
                    // });

                    // // r.array.forEach(ele => {
                    //     for (var key in ele) {
                    //         if (ele.hasOwnProperty(key)) {
                    //             frappe.msgprint(key + ': ' + ele[key]);
                    //         }
                    //     }
                    // });
                        
                    }
                }
            )
        })
 	},
    
});
