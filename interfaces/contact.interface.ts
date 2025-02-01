export interface Contact {
    id:                        number;
    requester_user_id:         number;
    receiver_user_id:          number;
    status:                    string;
    request_date:              Date;
    response_date:             Date;
    created_at:                Date;
    updated_at:                Date;
    deleted_at:                null;
    requester_name:            string;
    requester_uuid:            string;
    requester_profile_picture: string;
}