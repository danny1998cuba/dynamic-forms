export const formInputs = [
    {
        type: "text",
        name: "name",
        placeholder: "Full Name",
        value: "Daniel Gonzalez",
        validations: [
            {
                type: "minLength",
                value: 3,
                message: "Min. 3 characters",
            },
            {
                type: "required",
                message: "Full Name is required"
            },
        ],

    },
    {
        type: "email",
        name: "email",
        placeholder: "E-mail",
        value: "",
        validations: [
            {
                type: "isEmail",
                message: "Email no valid"
            },
            {
                type: "required",
                message: "Email is required"
            }
        ],

    },
    {
        type: "password",
        name: "password",
        placeholder: "Password",
        value: "",
        validations: [
            {
                type: "required",
                message: "Password is required"
            },
            {
                type: 'regex',
                value: /^[A-Z]+$/,
                message: 'Password must be all capital'
            }
        ],

    },
    {
        type: "password",
        name: "password2",
        placeholder: "Repit Password",
        value: "",
        validations: [
            {
                type: "required",
                message: "Password 2 is required"
            }
        ],

    },
    {
        type: "select",
        name: "rol",
        label: "Select an option: ",
        value: "",
        options: [
            {
                value: "admin",
                desc: "Admin",
            },
            {
                value: "user",
                desc: "User"
            },
            {
                value: "super-admin",
                desc: "Super Admin"
            }
        ],
        validations: [
            {
                type: "required",
                message: "Rol is required"
            }
        ]
    },
    {
        type: "radio-group",
        name: "gender",
        label: "Gender: ",
        value: "",
        options: [
            {
                value: 'man',
                desc: "Man"
            },
            {

                value: "woman",
                desc: "Woman"
            },
            {

                value: "other",
                desc: "Other"
            },
        ],
        validations: [
            {
                type: "required",
                message: "Gender is required"
            }
        ]
    },
    {
        type: "checkbox",
        name: "terms",
        typeValue: "boolean",
        label: "Terms and Conditions",
        // class: "input-reverse",
        value: false,
        validations: [
            {
                type: "isTrue",
                message: "Accept the terms!"
            }
        ]
    },
    {
        type: 'submit',
        name: 'btn',
        value: 'Submit'
    }
]