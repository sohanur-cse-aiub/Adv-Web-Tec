import {Injectable} from '@nestjs/common';

@Injectable()
export class AdminService { 
    getAdmin(): string {
        return 'admin';
    }
    
getAdminbyId(id: number): string {
        return "admin Id:"+ id;
    }
}
