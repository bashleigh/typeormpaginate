import { Repository, ObjectLiteral } from "typeorm";
import PaginationInterface from "./PaginationInterface";
import PaginationOptions from "./PaginationOptions";

/**
 * A function to return a defined object for pagination
 */
export default async (
  repository: Repository<ObjectLiteral>,
  paginationOptions: PaginationOptions = { page: 1, limit: 10 }
): Promise<PaginationInterface> => {
  if (paginationOptions.page >= 1) paginationOptions.page--;

  const [data, total] = await repository.findAndCount({
    skip: paginationOptions.page * paginationOptions.limit,
    take: paginationOptions.limit
  });

  return {
    data,
    total,
    pages: Math.ceil(total / paginationOptions.limit),
    count: data.length
  };
};
