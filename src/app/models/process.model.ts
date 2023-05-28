export class Process {
    id: number = 1;
    plain_text: string = '';
    cipher_text: string = 'جار فك التشفير ...';
    saved: boolean = false;
    switch_case: boolean = true; //True: Uppercase; False: Lowercase
    encryption_key: number = 1;
    alphabet_key:string = 'EYFQWDTCRJBGANXOILZMPSHKVU';//E Y F Q W D T C R J B G A N X O I L Z M P S H K V U
    status: boolean = true; //True: Encryption; False: Decryption;
    algorithm: string = "CAESAR_CIPHER";
    created_at: Date = new Date();
    modified_at: Date = new Date();
}
