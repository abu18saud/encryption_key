export class Process {
    id: number = 1;
    plain_text: string = '';
    cipher_text: string = 'جار فك التشفير ...';
    saved: boolean = false;
    switch_case: boolean = true; //True: Uppercase; False: Lowercase
    encryption_key: number = 1;
    status: boolean = true; //True: Encryption; False: Decryption;
    algorithm: string = "CAESAR_CIPHER";
    created_at: Date = new Date();
    modified_at: Date = new Date();
}
