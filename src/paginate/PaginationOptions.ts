import { FindManyOptions } from "typeorm";

export default interface PaginationOptions<Entity = any>
  extends FindManyOptions<Entity> {
  /**
   * Specify the offset starting from 0
   */
  page: number;

  /**
   * Limit (paginated) - max number of entities should be shown
   */
  limit: number;
}
