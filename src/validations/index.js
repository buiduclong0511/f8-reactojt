import * as yup from 'yup';

export const orderValidation = yup.object().shape({
    contact: yup
        .string()
        .required('Contact is required.')
        .max(191, 'Max length is 191 characters.')
        .test({
            name: 'Validate email or phone',
            message: 'Contact must be email or phone.',
            test: (value) => {
                return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) || /^0[0-9]{9}$/.test(value);
            },
        }),
    first_name: yup.string().required('First name is required.').max(191, 'Max length is 191 characters.'),
    last_name: yup.string().required('Last name is required.').max(191, 'Max length is 191 characters.'),
    address: yup.string().required('Address is required.').max(191, 'Max length is 191 characters.'),
    description: yup.string().max(191, 'Max length is 191 characters.'),
    city: yup.string().required('City is required.').max(191, 'Max length is 191 characters.'),
    postal_code: yup
        .string()
        .required('Postal code is required.')
        .test({
            name: 'Validate is number',
            message: 'Postal code must be number.',
            test: (value) => {
                return Number(value) || Number(value) === 0;
            },
        }),
});
