import { FunctionDeclaration } from "estree";

export const config = [

    {
        name: 'Text',
        iconClass: 'material-icons',
        iconName: 'text_fields',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: '', inputType: 'string',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'First Name',
        iconClass: 'material-icons',
        iconName: 'person',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: '',
        inputType: 'string',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Last Name',
        iconClass: 'material-icons',
        iconName: 'person',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: '',
        inputType: 'string',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Number',
        iconClass: 'material-icons',
        iconName: 'numbers',
        inputType: 'number',
        icon: 'fas fa-hashtag',
        class: 'half',
        placeholder: '',
        numericValue: 0,
        value: undefined,
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Phone Number',
        iconClass: 'material-icons',
        iconName: 'phone',
        inputType: 'phoneNumber',
        icon: 'fas fa-hashtag',
        class: 'half',
        placeholder: '',
        numericValue: 0,
        value: undefined,
        minCharacter: 9,
        maxCharacter: 11,
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        missing: ['Type for us and international'],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Currency',
        iconClass: 'material-icons',
        iconName: 'payments',
        inputType: 'currency',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: undefined,
        minCharacter: 9,
        maxCharacter: 11,
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        collectPayment: false,
        missing: ['Type for Date and time'],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            collectPayment: {
                dataRefKey: 'collectPayment'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Date',
        iconClass: 'material-icons',
        iconName: 'date_range',
        inputType: 'date',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: undefined,
        minCharacter: 9,
        maxCharacter: 11,
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        collectPayment: false,
        missing: ['Type for Date and time'],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            dateRange: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Radio',
        iconClass: 'material-icons',
        iconName: 'radio_button_checked',
        inputType: 'radio',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: 'Option 1',
        minCharacter: 9,
        maxCharacter: 11,
        size: 'medium',
        view: 'always',
        collectPayment: false,
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        options: [
            { label: 'Option 1', payment: 0 },
            { label: 'Option 2', payment: 0 },
            { label: 'Option 3', payment: 0 }
        ],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            },
            options: true,
            collectPayment: true
        }
    },
    {
        name: 'Checkbox',
        iconClass: 'material-icons',
        iconName: 'check_circle',
        inputType: 'checkbox',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: ['Option 1'],
        minCharacter: 9,
        maxCharacter: 11,
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        collectPayment: false,
        missing: ['Type for Date and time'],
        options: [
            { label: 'Option 1', payment: 0 },
            { label: 'Option 2', payment: 0 },
            { label: 'Option 3', payment: 0 }
        ],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            collectPayment: true,
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            },
            options: true
        }
    },
    {
        name: 'Dropdown',
        iconClass: 'material-icons',
        iconName: 'list',
        inputType: 'dropdown',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: 'Option 1',
        minCharacter: 9,
        maxCharacter: 11,
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        collectPayment: false,
        missing: ['Type for Date and time'],
        options: [
            'Option 1',
            'Option 2',
            'Option 3'
        ],
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            },
            options: true
        }
    },
    {
        name: 'Address',
        iconClass: 'material-icons',
        iconName: 'place',
        value: '',
        children: [
            {
                name: 'Text',
                value: '',
                inputType: 'AddressField',
                icon: 'fas fa-language',
                class: 'col-12 p-2',
                placeholder: 'Address Line 1',
                disabled: false,
                notCustomizable: true
            },
            {
                name: 'Text',
                value: '',
                inputType: 'AddressField',
                icon: 'fas fa-language',
                class: 'col-12 p-2',
                placeholder: 'Address Line 2',
                disabled: false
            },
            {
                name: 'City',
                value: '',
                inputType: 'AddressField',
                icon: 'fas fa-language',
                class: 'col-6 p-2',
                placeholder: 'City',
                disabled: false
            },
            {
                name: 'State',
                value: '',
                inputType: 'AddressField',
                icon: 'fas fa-language',
                class: 'col-6 p-2',
                placeholder: 'State',
                disabled: false
            },
            {
                name: 'Zip',
                value: '',
                inputType: 'AddressField',
                icon: 'fas fa-language',
                class: 'col-6 p-2',
                placeholder: 'Zip',
                disabled: false
            },
            {
                name: 'Country',
                value: '',
                inputType: 'AddressField',
                icon: 'fas fa-language',
                class: 'col-6 p-2',
                placeholder: 'Country',
                disabled: false
            }
        ] as any[],
        selectedType: 'US',
        inputType: 'addressSection',
        icon: 'far fa-square',
        class: 'wide',
        size: 'medium',
        view: 'always',
        validations: {
            size: {
                dataRefKey: 'size',
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ]
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            },
            typeOfAddress: {
                US: [
                    {
                        name: 'Text',
                        value: '',
                        inputType: 'AddressField',
                        icon: 'fas fa-language',
                        class: 'col-12 p-2',
                        placeholder: 'Address Line 1',
                        disabled: false,
                        notCustomizable: true
                    },
                    {
                        name: 'Text',
                        value: '',
                        inputType: 'AddressField',
                        icon: 'fas fa-language',
                        class: 'col-12 p-2',
                        placeholder: 'Address Line 2',
                        disabled: false
                    },
                    {
                        name: 'City',
                        value: '',
                        inputType: 'AddressField',
                        icon: 'fas fa-language',
                        class: 'col-6 p-2',
                        placeholder: 'City',
                        disabled: false
                    },
                    {
                        name: 'State',
                        value: '',
                        inputType: 'AddressField',
                        icon: 'fas fa-language',
                        class: 'col-6 p-2',
                        placeholder: 'State',
                        disabled: false
                    },
                    {
                        name: 'Zip',
                        value: '',
                        inputType: 'AddressField',
                        icon: 'fas fa-language',
                        class: 'col-6 p-2',
                        placeholder: 'Zip',
                        disabled: false
                    },
                    {
                        name: 'Country',
                        value: '',
                        inputType: 'AddressField',
                        icon: 'fas fa-language',
                        class: 'col-6 p-2',
                        placeholder: 'Country',
                        disabled: false
                    }
                ],
                NONUS: [
                    {
                        name: 'Text',
                        value: '',
                        inputType: 'AddressField',
                        icon: 'fas fa-language',
                        class: 'col-12 p-2',
                        placeholder: 'Address Line 1',
                        disabled: false,
                        notCustomizable: true
                    },
                    {
                        name: 'Text',
                        value: '',
                        inputType: 'AddressField',
                        icon: 'fas fa-language',
                        class: 'col-12 p-2',
                        placeholder: 'Address Line 2',
                        disabled: false
                    },
                    {
                        name: 'City',
                        value: '',
                        inputType: 'AddressField',
                        icon: 'fas fa-language',
                        class: 'col-4 p-1',
                        placeholder: 'City',
                        disabled: false
                    },
                    {
                        name: 'State',
                        value: '',
                        inputType: 'AddressField',
                        icon: 'fas fa-language',
                        class: 'col-4 p-1',
                        placeholder: 'State',
                        disabled: false
                    },
                    {
                        name: 'Zip',
                        value: '',
                        inputType: 'AddressField',
                        icon: 'fas fa-language',
                        class: 'col-4 p-1',
                        placeholder: 'Zip',
                        disabled: false
                    }
                ]
            }
        }
    },
    {
        name: 'Table',
        value: '',
        columns: [] as any[],
        inputType: 'table',
        icon: 'far fa-square',
        class: 'wide',
        size: 'extra-large',
        view: 'always',
        validations: {
            size: {
                dataRefKey: 'size',
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ]
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            },
            addColumns: [
                {
                    name: 'Text',
                    textValue: '',
                    minCharacter: 0,
                    maxCharacter: 100,
                    value: '', inputType: 'string',
                    icon: 'fas fa-language',
                    class: 'full',
                    placeholder: '',
                    size: 'medium',
                    view: 'always',
                    minVal: 0,
                    maxVal: 50,
                    helpText: '',
                    isRequired: 'always',
                    validations: {
                        label: {
                            dataRefKey: 'name'
                        },
                        placeholder: {
                            dataRefKey: 'placeholder'
                        },
                        size: {
                            options: [
                                {
                                    label: 'Small',
                                    value: 'small'
                                },
                                {
                                    label: 'Medium',
                                    value: 'medium'
                                },
                                {
                                    label: 'Large',
                                    value: 'large'
                                },
                                {
                                    label: 'Extra Large',
                                    value: 'extra-large'
                                }
                            ],
                            dataRefKey: 'size'
                        },
                        defaultValue: {
                            dataRefKey: 'value'
                        },
                        range: {
                            minDataRefKey: 'minVal',
                            maxDataRefKey: 'maxVal'
                        },
                        help: {
                            dataRefKey: 'helpText'
                        },
                        view: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'view'
                        },
                        required: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'isRequired'
                        }
                    }
                },
                {
                    name: 'Date',
                    inputType: 'date',
                    icon: 'fas fa-hashtag',
                    class: 'half',
                    numericValue: 0,
                    value: undefined,
                    minCharacter: 9,
                    maxCharacter: 11,
                    size: 'medium',
                    view: 'always',
                    minVal: 0,
                    maxVal: 50,
                    helpText: '',
                    isRequired: 'always',
                    collectPayment: false,
                    missing: ['Type for Date and time'],
                    validations: {
                        label: {
                            dataRefKey: 'name'
                        },
                        size: {
                            options: [
                                {
                                    label: 'Small',
                                    value: 'small'
                                },
                                {
                                    label: 'Medium',
                                    value: 'medium'
                                },
                                {
                                    label: 'Large',
                                    value: 'large'
                                },
                                {
                                    label: 'Extra Large',
                                    value: 'extra-large'
                                }
                            ],
                            dataRefKey: 'size'
                        },
                        dateRange: {
                            minDataRefKey: 'minVal',
                            maxDataRefKey: 'maxVal'
                        },
                        help: {
                            dataRefKey: 'helpText'
                        },
                        view: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'view'
                        },
                        required: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'isRequired'
                        }
                    }
                },
                {
                    name: 'Phone Number',
                    inputType: 'phoneNumber',
                    icon: 'fas fa-hashtag',
                    class: 'half',
                    placeholder: '',
                    numericValue: 0,
                    value: undefined,
                    minCharacter: 9,
                    maxCharacter: 11,
                    size: 'medium',
                    view: 'always',
                    minVal: 0,
                    maxVal: 50,
                    helpText: '',
                    isRequired: 'always',
                    missing: ['Type for us and international'],
                    validations: {
                        label: {
                            dataRefKey: 'name'
                        },
                        placeholder: {
                            dataRefKey: 'placeholder'
                        },
                        size: {
                            options: [
                                {
                                    label: 'Small',
                                    value: 'small'
                                },
                                {
                                    label: 'Medium',
                                    value: 'medium'
                                },
                                {
                                    label: 'Large',
                                    value: 'large'
                                },
                                {
                                    label: 'Extra Large',
                                    value: 'extra-large'
                                }
                            ],
                            dataRefKey: 'size'
                        },
                        defaultValue: {
                            dataRefKey: 'value'
                        },
                        range: {
                            minDataRefKey: 'minVal',
                            maxDataRefKey: 'maxVal'
                        },
                        help: {
                            dataRefKey: 'helpText'
                        },
                        view: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'view'
                        },
                        required: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'isRequired'
                        }
                    }
                },
                {
                    name: 'Currency',
                    inputType: 'currency',
                    icon: 'fas fa-hashtag',
                    class: 'half',
                    numericValue: 0,
                    value: 0,
                    minCharacter: 9,
                    maxCharacter: 11,
                    size: 'medium',
                    view: 'always',
                    minVal: 0,
                    maxVal: 50,
                    helpText: '',
                    isRequired: 'always',
                    collectPayment: false,
                    missing: ['Type for Date and time'],
                    validations: {
                        label: {
                            dataRefKey: 'name'
                        },
                        size: {
                            options: [
                                {
                                    label: 'Small',
                                    value: 'small'
                                },
                                {
                                    label: 'Medium',
                                    value: 'medium'
                                },
                                {
                                    label: 'Large',
                                    value: 'large'
                                },
                                {
                                    label: 'Extra Large',
                                    value: 'extra-large'
                                }
                            ],
                            dataRefKey: 'size'
                        },
                        defaultValue: {
                            dataRefKey: 'value'
                        },
                        collectPayment: {
                            dataRefKey: 'collectPayment'
                        },
                        range: {
                            minDataRefKey: 'minVal',
                            maxDataRefKey: 'maxVal'
                        },
                        help: {
                            dataRefKey: 'helpText'
                        },
                        view: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'view'
                        },
                        required: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'isRequired'
                        }
                    }
                },
                {
                    name: 'Payment',
                    textValue: '',
                    minCharacter: 0,
                    maxCharacter: 100,
                    value: '',
                    inputType: 'payment',
                    icon: 'fas fa-language',
                    class: 'full',
                    placeholder: '',
                    size: 'medium',
                    view: 'always',
                    minVal: 0,
                    maxVal: 50,
                    helpText: '',
                    isRequired: 'always',
                    validations: {
                        label: {
                            dataRefKey: 'name'
                        },
                        size: {
                            options: [
                                {
                                    label: 'Small',
                                    value: 'small'
                                },
                                {
                                    label: 'Medium',
                                    value: 'medium'
                                },
                                {
                                    label: 'Large',
                                    value: 'large'
                                },
                                {
                                    label: 'Extra Large',
                                    value: 'extra-large'
                                }
                            ],
                            dataRefKey: 'size'
                        },
                        defaultValue: {
                            dataRefKey: 'value'
                        },
                        help: {
                            dataRefKey: 'helpText'
                        },
                        view: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'view'
                        },
                        required: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'isRequired'
                        }
                    }
                },

                {
                    name: 'Website',
                    textValue: '',
                    minCharacter: 0,
                    maxCharacter: 100,
                    value: '', inputType: 'website',
                    icon: 'fas fa-language',
                    class: 'full',
                    placeholder: '',
                    size: 'medium',
                    view: 'always',
                    minVal: 0,
                    maxVal: 50,
                    helpText: '',
                    isRequired: 'always',
                    validations: {
                        label: {
                            dataRefKey: 'name'
                        },
                        placeholder: {
                            dataRefKey: 'placeholder'
                        },
                        size: {
                            options: [
                                {
                                    label: 'Small',
                                    value: 'small'
                                },
                                {
                                    label: 'Medium',
                                    value: 'medium'
                                },
                                {
                                    label: 'Large',
                                    value: 'large'
                                },
                                {
                                    label: 'Extra Large',
                                    value: 'extra-large'
                                }
                            ],
                            dataRefKey: 'size'
                        },
                        defaultValue: {
                            dataRefKey: 'value'
                        },
                        range: {
                            minDataRefKey: 'minVal',
                            maxDataRefKey: 'maxVal'
                        },
                        help: {
                            dataRefKey: 'helpText'
                        },
                        view: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'view'
                        },
                        required: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'isRequired'
                        }
                    }
                },
                {
                    name: 'Email',
                    textValue: '',
                    minCharacter: 0,
                    maxCharacter: 100,
                    value: '',
                    inputType: 'email',
                    icon: 'fas fa-language',
                    class: 'full',
                    placeholder: '',
                    size: 'medium',
                    view: 'always',
                    minVal: 0,
                    maxVal: 50,
                    helpText: '',
                    isRequired: 'always',
                    validations: {
                        label: {
                            dataRefKey: 'name'
                        },
                        placeholder: {
                            dataRefKey: 'placeholder'
                        },
                        size: {
                            options: [
                                {
                                    label: 'Small',
                                    value: 'small'
                                },
                                {
                                    label: 'Medium',
                                    value: 'medium'
                                },
                                {
                                    label: 'Large',
                                    value: 'large'
                                },
                                {
                                    label: 'Extra Large',
                                    value: 'extra-large'
                                }
                            ],
                            dataRefKey: 'size'
                        },
                        defaultValue: {
                            dataRefKey: 'value'
                        },
                        range: {
                            minDataRefKey: 'minVal',
                            maxDataRefKey: 'maxVal'
                        },
                        help: {
                            dataRefKey: 'helpText'
                        },
                        view: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'view'
                        },
                        required: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'isRequired'
                        }
                    }
                },
                {
                    name: 'Number',
                    inputType: 'number',
                    icon: 'fas fa-hashtag',
                    class: 'half',
                    placeholder: '',
                    numericValue: 0,
                    value: undefined,
                    size: 'medium',
                    view: 'always',
                    minVal: 0,
                    maxVal: 50,
                    helpText: '',
                    validations: {
                        label: {
                            dataRefKey: 'name'
                        },
                        placeholder: {
                            dataRefKey: 'placeholder'
                        },
                        size: {
                            options: [
                                {
                                    label: 'Small',
                                    value: 'small'
                                },
                                {
                                    label: 'Medium',
                                    value: 'medium'
                                },
                                {
                                    label: 'Large',
                                    value: 'large'
                                },
                                {
                                    label: 'Extra Large',
                                    value: 'extra-large'
                                }
                            ],
                            dataRefKey: 'size'
                        },
                        defaultValue: {
                            dataRefKey: 'value'
                        },
                        range: {
                            minDataRefKey: 'minVal',
                            maxDataRefKey: 'maxVal'
                        },
                        help: {
                            dataRefKey: 'helpText'
                        },
                        view: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'view'
                        },
                        required: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'isRequired'
                        }
                    }
                },
                {
                    name: 'Dropdown',
                    inputType: 'dropdown',
                    icon: 'fas fa-hashtag',
                    class: 'half',
                    numericValue: 0,
                    value: 'Option 1',
                    minCharacter: 9,
                    maxCharacter: 11,
                    size: 'medium',
                    view: 'always',
                    minVal: 0,
                    maxVal: 50,
                    helpText: '',
                    isRequired: 'always',
                    collectPayment: false,
                    missing: ['Type for Date and time'],
                    options: [
                        'Option 1',
                        'Option 2',
                        'Option 3'
                    ],
                    validations: {
                        label: {
                            dataRefKey: 'name'
                        },
                        size: {
                            options: [
                                {
                                    label: 'Small',
                                    value: 'small'
                                },
                                {
                                    label: 'Medium',
                                    value: 'medium'
                                },
                                {
                                    label: 'Large',
                                    value: 'large'
                                },
                                {
                                    label: 'Extra Large',
                                    value: 'extra-large'
                                }
                            ],
                            dataRefKey: 'size'
                        },
                        help: {
                            dataRefKey: 'helpText'
                        },
                        view: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'view'
                        },
                        required: {
                            options: [
                                {
                                    label: 'Always',
                                    value: 'always'
                                },
                                {
                                    label: 'When',
                                    value: 'when'
                                },
                                {
                                    label: 'Never',
                                    value: 'never'
                                }
                            ],
                            dataRefKey: 'isRequired'
                        },
                        options: true
                    }
                }
            ]
        },

    },
    {
        name: 'Rating',
        iconClass: 'material-icons',
        iconName: 'grade',
        inputType: 'rating',
        icon: 'fas fa-hashtag',
        class: 'half',
        numericValue: 0,
        value: 'Option 1',
        minCharacter: 9,
        maxCharacter: 11,
        size: 'large',
        view: 'always',
        helpText: '',
        isRequired: 'always',
        ratingOptions: [
            {
                label: 'Option 1',
                value: ''
            },
            {
                label: 'Option 2',
                value: ''
            },
            {
                label: 'Option 3',
                value: ''
            }
        ],
        ratingScale: {
            'Agree/Disagree': ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
            'Satisfied/Unsatisfied': ['Very Unsatisfied', 'Unsatisfied', 'Neutral', 'Satisfied', 'Very Satisfied'],
            'Good/Poor': ['Very Poor', 'Poor', 'Average', 'Good', 'Very Good'],
            'Scale of 1 to 5': ['1', '2', '3', '4', '5'],
            'Custom': ['1', '2', '3', '4', '5']
        },
        selectedRatingScale: 'Agree/Disagree',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    // {
                    //     label: 'Small',
                    //     value: 'small'
                    // },
                    // {
                    //     label: 'Medium',
                    //     value: 'medium'
                    // },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            },
            ratingOptions: true
        }
    },
    {
        name: 'Payment',
        iconClass: 'material-icons',
        iconName: 'attach_money',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: '',
        inputType: 'payment',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Calculations',
        iconClass: 'material-icons',
        iconName: 'calculate',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: '',
        inputType: 'calculations',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Website',
        textValue: '',
        iconClass: 'material-icons',
        iconName: 'public',
        minCharacter: 0,
        maxCharacter: 100,
        value: '', inputType: 'website',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Email',
        iconClass: 'material-icons',
        iconName: 'mail',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: '',
        inputType: 'email',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'medium',
        view: 'always',
        minVal: 0,
        maxVal: 50,
        helpText: '',
        isRequired: 'always',
        validations: {
            label: {
                dataRefKey: 'name'
            },
            placeholder: {
                dataRefKey: 'placeholder'
            },
            size: {
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ],
                dataRefKey: 'size'
            },
            defaultValue: {
                dataRefKey: 'value'
            },
            range: {
                minDataRefKey: 'minVal',
                maxDataRefKey: 'maxVal'
            },
            help: {
                dataRefKey: 'helpText'
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    }
]

export const layoutInputs = [
    {
        name: 'Section',
        iconClass: 'material-icons',
        iconName: 'web',
        value: '',
        children: [] as any[],
        inputType: 'section',
        icon: 'far fa-square',
        class: 'wide',
        size: 'medium',
        view: 'always',
        get show() {

            return true;
        },
        validations: {
            size: {
                dataRefKey: 'size',
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ]
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Repeat Section',
        value: '',
        childSection: [{
            name: 'Section',
            value: '',
            children: [] as any[],
            inputType: 'section',
            icon: 'far fa-square',
            class: 'wide',
            size: 'medium',
            view: 'always',
            get show() {

                return true;
            },
            validations: {
                size: {
                    dataRefKey: 'size',
                    options: [
                        {
                            label: 'Small',
                            value: 'small'
                        },
                        {
                            label: 'Medium',
                            value: 'medium'
                        },
                        {
                            label: 'Large',
                            value: 'large'
                        },
                        {
                            label: 'Extra Large',
                            value: 'extra-large'
                        }
                    ]
                },
                view: {
                    options: [
                        {
                            label: 'Always',
                            value: 'always'
                        },
                        {
                            label: 'When',
                            value: 'when'
                        },
                        {
                            label: 'Never',
                            value: 'never'
                        }
                    ],
                    dataRefKey: 'view'
                },
                required: {
                    options: [
                        {
                            label: 'Always',
                            value: 'always'
                        },
                        {
                            label: 'When',
                            value: 'when'
                        },
                        {
                            label: 'Never',
                            value: 'never'
                        }
                    ],
                    dataRefKey: 'isRequired'
                }
            }
        }] as any[],
        inputType: 'repeatSection',
        icon: 'far fa-square',
        class: 'wide',
        size: 'medium',
        view: 'always',
        validations: {
            size: {
                dataRefKey: 'size',
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ]
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Page Break',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: 'Page',
        inputType: 'break',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'extra-large',
        validations: {
            pageBreakName: true
        }
    },
    {
        name: 'Content',
        textValue: '',
        minCharacter: 0,
        maxCharacter: 100,
        value: 'Page',
        inputType: 'content',
        icon: 'fas fa-language',
        class: 'full',
        placeholder: '',
        size: 'extra-large',
        validations: {
            contentEditor: true
        }
    }
]

export const advancedLayout = [
    {
        name: 'File Upload',
        value: '',
        inputType: 'fileupload',
        icon: 'far fa-square',
        class: 'wide',
        size: 'medium',
        view: 'always',
        validations: {
            size: {
                dataRefKey: 'size',
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    {
                        label: 'Medium',
                        value: 'medium'
                    },
                    {
                        label: 'Large',
                        value: 'large'
                    },
                    {
                        label: 'Extra Large',
                        value: 'extra-large'
                    }
                ]
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
    {
        name: 'Signature',
        value: '',
        inputType: 'sign',
        icon: 'far fa-square',
        class: 'wide',
        size: 'medium',
        view: 'always',
        validations: {
            size: {
                dataRefKey: 'size',
                options: [
                    {
                        label: 'Small',
                        value: 'small'
                    },
                    // {  
                    // {
                    //     label: 'Large',
                    //     value: 'large'
                    // },
                    // {
                    //     label: 'Extra Large',
                    //     value: 'extra-large'
                    // }
                ]
            },
            view: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'view'
            },
            required: {
                options: [
                    {
                        label: 'Always',
                        value: 'always'
                    },
                    {
                        label: 'When',
                        value: 'when'
                    },
                    {
                        label: 'Never',
                        value: 'never'
                    }
                ],
                dataRefKey: 'isRequired'
            }
        }
    },
]

export const Level = {
    name: 'Section',
    value: '',
    children: [] as any[],
    inputType: 'levelSection',
    icon: 'far fa-square',
    class: 'wide',
    size: 'extra-large',
    view: 'always',
}

export const paymentModel = {
    extraBill: [],
    inputType: 'paymentSection',
    showSubTotal: true,
    showLineItems: true,
    mapBillingFields: true,
    stripeAccount: "",
    paymentOption: ['Card', 'Cash'],
    selectedPaymentOption: 'Cash'
}