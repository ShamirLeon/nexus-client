export interface IUser {
    id:                        number;
    uuid:                      string;
    first_name:                string;
    last_name:                 string;
    username:                  string;
    phone:                     string;
    email:                     string;
    email_verified_at:         null;
    two_factor_secret:         null;
    two_factor_recovery_codes: null;
    two_factor_confirmed_at:   null;
    status:                    number;
    avatar:                    string;
    created_at:                Date;
    updated_at:                Date;
    deleted_at:                null;
}