import { inject, injectable } from 'tsyringe';

import { Rental } from '@modules/rentals/infra/typeorm/entities/Rental';
import { IRentalsRepository } from '@modules/rentals/repositories/IRentalsRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ListRentalsByUserUseCase {
  constructor(
    @inject('RentalsRepository')
    private rentalRepository: IRentalsRepository
  ) {}

  async execute({ user_id }: IRequest): Promise<Rental[]> {
    const rentals = await this.rentalRepository.findByUser(user_id);

    return rentals;
  }
}

export { ListRentalsByUserUseCase };
