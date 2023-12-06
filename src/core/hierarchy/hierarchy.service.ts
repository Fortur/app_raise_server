import { Injectable } from '@nestjs/common';
import { HierarchyRepository } from './hierarchy.repository';

@Injectable()
export class HierarchyService {
  constructor(private hierarchyRepository: HierarchyRepository) {}

  // Бизнес-логика для управления иерархией
}
