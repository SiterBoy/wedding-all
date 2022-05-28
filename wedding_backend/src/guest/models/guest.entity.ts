import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('guest_data')
export class GuestDataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hash: number;

  @Column({ default: '' })
  male_name: string;

  @Column({ default: '' })
  female_name: string;

  @Column({ default: '' })
  message: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP ' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP ' })
  updatedAt: Date;
}
