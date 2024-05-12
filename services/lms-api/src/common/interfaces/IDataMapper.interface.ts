export interface IDataMapper<TModel, TDomain> {
  // to usecase
  toDomain(daoEntity: TModel): TDomain;
  toDomains(daoEntities: TModel[]): TDomain[];

  // to DB
  toEntity(domainEntity: TDomain): TModel;
  toEntitys(domainEntities: TDomain[]): TModel[];
}
