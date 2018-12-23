
exports.seed = function(knex, Promise) {
  return knex('forms').del()
    .then(function () {
      return knex('forms').insert([
        {   theme: 'form 1',
            params: '{\n' +
                '    "params_count": 7,\n' +
                '    "params_defs": [{\n' +
                '        "id": 1,\n' +
                '        "type": "Text",\n' +
                '        "var_typ": "N",\n' +
                '        "name": "p1",\n' +
                '        "desc": "",\n' +
                '        "label": "User ID",\n' +
                '        "init1": 0,\n' +
                '        "upper_val": 1000,\n' +
                '        "lower_val": 0\n' +
                '    }, {\n' +
                '        "id": 2,\n' +
                '        "type": "Text",\n' +
                '        "var_typ": "N",\n' +
                '        "name": "p2",\n' +
                '        "desc": "",\n' +
                '        "label": "Account ID",\n' +
                '        "init1": 100000,\n' +
                '        "upper_val": 999999,\n' +
                '        "lower_val": 100000\n' +
                '    }, {\n' +
                '        "id": 3,\n' +
                '        "type": "Text",\n' +
                '        "var_typ": "N",\n' +
                '        "name": "p3",\n' +
                '        "desc": "",\n' +
                '        "label": "Ticket Number",\n' +
                '        "init1": 1,\n' +
                '        "upper_val": 555,\n' +
                '        "lower_val": 1\n' +
                '    }, {\n' +
                '        "id": 4,\n' +
                '        "type": "Text",\n' +
                '        "var_typ": "N",\n' +
                '        "name": "p4",\n' +
                '        "desc": "",\n' +
                '        "label": "Transaction ID",\n' +
                '        "init1": 0,\n' +
                '        "upper_val": 9999999,\n' +
                '        "lower_val": 1000000\n' +
                '    }, {\n' +
                '        "id": 5,\n' +
                '        "type": "Date Interval",\n' +
                '        "var_typ": "N",\n' +
                '        "name": "p5",\n' +
                '        "desc": "",\n' +
                '        "label": "Period",\n' +
                '        "init1": "2015-01-01",\n' +
                '        "init2": "2999-12-31",\n' +
                '        "upper_val": "",\n' +
                '        "lower_val": ""\n' +
                '    }, {\n' +
                '        "id": 6,\n' +
                '        "type": "Select Item",\n' +
                '        "var_typ": "N",\n' +
                '        "name": "p6",\n' +
                '        "desc": "",\n' +
                '        "label": "Transaction\'s Status ",\n' +
                '        "init1": "[0] Open Transaction",\n' +
                '        "fmt_name": "fmt_123",\n' +
                '        "option_label": ["[0] Open Transaction", "[1] Closed Transaction", "[2] Deleted Transaction"],\n' +
                '        "option_value": [0, 1, 2]\n' +
                '    }, {\n' +
                '        "id": 7,\n' +
                '        "type": "Select Item",\n' +
                '        "var_typ": "N",\n' +
                '        "name": "p7",\n' +
                '        "desc": "",\n' +
                '        "label": "Detailed Report?",\n' +
                '        "init1": 0,\n' +
                '        "fmt_name": "fmt_001",\n' +
                '        "option_label": ["No", "Yes"],\n' +
                '        "option_value": [0, 1]\n' +
                '    }]\n' +
                '}'},
        {   theme: 'form 2',
            params: '{\n' +
                '    "params_count": 4,\n' +
                '    "params_defs": [{\n' +
                '        "id": 1,\n' +
                '        "type": "Text",\n' +
                '        "var_typ": "N",\n' +
                '        "name": "p1",\n' +
                '        "desc": "",\n' +
                '        "label": "Year:",\n' +
                '        "init1": 2018,\n' +
                '        "upper_val": 2999,\n' +
                '        "lower_val": 1900\n' +
                '    }, {\n' +
                '        "id": 2,\n' +
                '        "type": "Text",\n' +
                '        "var_typ": "N",\n' +
                '        "name": "p2",\n' +
                '        "desc": "",\n' +
                '        "label": "From month to month:",\n' +
                '        "init1": "",\n' +
                '        "init2": "",\n' +
                '        "upper_val": "1",\n' +
                '        "lower_val": "12"\n' +
                '    }, {\n' +
                '        "id": 3,\n' +
                '        "type": "Text",\n' +
                '        "var_typ": "N",\n' +
                '        "name": "p3",\n' +
                '        "desc": "",\n' +
                '        "label": "Exchange Rate:",\n' +
                '        "init1": 1,\n' +
                '        "upper_val": 500,\n' +
                '        "lower_val": 1\n' +
                '    }, {\n' +
                '        "id": 4,\n' +
                '        "type": "ComboBox",\n' +
                '        "var_typ": "S",\n' +
                '        "name": "p4",\n' +
                '        "desc": "",\n' +
                '        "label": "Group of Agents",\n' +
                '        "init1": "",\n' +
                '        "fmt_name":"",\n' +
                '        "option_label": ["Group ABC",\n' +
                '\t\t\t\t\t\t\t"Group DEF",\n' +
                '\t\t\t\t\t\t\t"Group XYZ"],\n' +
                '        "option_value": ["Group ABC",\n' +
                '\t\t\t\t\t\t\t"Group DEF",\n' +
                '\t\t\t\t\t\t\t"Group XYZ"]\n' +
                '    }]\n' +
                '}'},
        {   theme: 'form 3',
            params: '{\n' +
                '    "params_count": 3,\n' +
                '    "params_defs": [{\n' +
                '        "id": 1,\n' +
                '        "type": "Text",\n' +
                '        "var_typ": "S",\n' +
                '        "name": "p1",\n' +
                '        "desc": "",\n' +
                '        "label": "Title of document:",\n' +
                '        "init1": ""\n' +
                '    }, {\n' +
                '        "id": 2,\n' +
                '        "type": "Date Interval",\n' +
                '        "var_typ": "N",\n' +
                '        "name": "p2",\n' +
                '        "desc": "",\n' +
                '        "label": "Period",\n' +
                '        "init1": "2015-01-01",\n' +
                '        "init2": "2999-12-31",\n' +
                '        "upper_val": "",\n' +
                '        "lower_val": ""\n' +
                '    }, {\n' +
                '        "id": 3,\n' +
                '        "type": "ComboBox",\n' +
                '        "var_typ": "N",\n' +
                '        "name": "p3",\n' +
                '        "desc": "",\n' +
                '        "label": "Status of document:",\n' +
                '        "init1": 100,\n' +
                '        "fmt_name":"fmt_003",\n' +
                '        "option_label": [\t"[100] Closed", \n' +
                '\t\t\t\t\t\t\t"[200] Opened", \n' +
                '\t\t\t\t\t\t\t"[300] Waiting for approve",\n' +
                '\t\t\t\t\t\t\t"[400] Sended"],\n' +
                '        "option_value": [100, 200, 300, 400]\n' +
                '    }]\n' +
                '}'}
      ]);
    });
};
