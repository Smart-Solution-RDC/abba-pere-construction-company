
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Entreprise
 * 
 */
export type Entreprise = $Result.DefaultSelection<Prisma.$EntreprisePayload>
/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Adresse
 * 
 */
export type Adresse = $Result.DefaultSelection<Prisma.$AdressePayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Fournisseur
 * 
 */
export type Fournisseur = $Result.DefaultSelection<Prisma.$FournisseurPayload>
/**
 * Model Teneur
 * 
 */
export type Teneur = $Result.DefaultSelection<Prisma.$TeneurPayload>
/**
 * Model Produit
 * 
 */
export type Produit = $Result.DefaultSelection<Prisma.$ProduitPayload>
/**
 * Model DetailVente
 * 
 */
export type DetailVente = $Result.DefaultSelection<Prisma.$DetailVentePayload>
/**
 * Model Paiement
 * 
 */
export type Paiement = $Result.DefaultSelection<Prisma.$PaiementPayload>
/**
 * Model Vente
 * 
 */
export type Vente = $Result.DefaultSelection<Prisma.$VentePayload>
/**
 * Model DetailAchat
 * 
 */
export type DetailAchat = $Result.DefaultSelection<Prisma.$DetailAchatPayload>
/**
 * Model Achat
 * 
 */
export type Achat = $Result.DefaultSelection<Prisma.$AchatPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  CLIENT: 'CLIENT',
  AGENT: 'AGENT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Poste: {
  DIRECTEUR: 'DIRECTEUR',
  SECRETAIRE: 'SECRETAIRE',
  CAISSER: 'CAISSER',
  GERANT: 'GERANT'
};

export type Poste = (typeof Poste)[keyof typeof Poste]


export const Sexe: {
  homme: 'homme',
  femme: 'femme'
};

export type Sexe = (typeof Sexe)[keyof typeof Sexe]


export const Ville: {
  Bandundu: 'Bandundu',
  Kindu: 'Kindu',
  Butembo: 'Butembo',
  Kinshasa: 'Kinshasa',
  Mbujimayi: 'Mbujimayi',
  Lubumbashi: 'Lubumbashi',
  Kananga: 'Kananga',
  Kisangani: 'Kisangani',
  Goma: 'Goma',
  Bukavu: 'Bukavu',
  Tshikapa: 'Tshikapa',
  Kolwezi: 'Kolwezi',
  Likasi: 'Likasi',
  Kikwit: 'Kikwit',
  Uvira: 'Uvira',
  Bunia: 'Bunia',
  Kalemie: 'Kalemie',
  Mbandaka: 'Mbandaka',
  Matadi: 'Matadi'
};

export type Ville = (typeof Ville)[keyof typeof Ville]


export const MoyenPaiment: {
  CACH: 'CACH',
  BANCAIRE: 'BANCAIRE'
};

export type MoyenPaiment = (typeof MoyenPaiment)[keyof typeof MoyenPaiment]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Poste = $Enums.Poste

export const Poste: typeof $Enums.Poste

export type Sexe = $Enums.Sexe

export const Sexe: typeof $Enums.Sexe

export type Ville = $Enums.Ville

export const Ville: typeof $Enums.Ville

export type MoyenPaiment = $Enums.MoyenPaiment

export const MoyenPaiment: typeof $Enums.MoyenPaiment

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Entreprises
 * const entreprises = await prisma.entreprise.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Entreprises
   * const entreprises = await prisma.entreprise.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.entreprise`: Exposes CRUD operations for the **Entreprise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entreprises
    * const entreprises = await prisma.entreprise.findMany()
    * ```
    */
  get entreprise(): Prisma.EntrepriseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adresse`: Exposes CRUD operations for the **Adresse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adresses
    * const adresses = await prisma.adresse.findMany()
    * ```
    */
  get adresse(): Prisma.AdresseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fournisseur`: Exposes CRUD operations for the **Fournisseur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fournisseurs
    * const fournisseurs = await prisma.fournisseur.findMany()
    * ```
    */
  get fournisseur(): Prisma.FournisseurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teneur`: Exposes CRUD operations for the **Teneur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teneurs
    * const teneurs = await prisma.teneur.findMany()
    * ```
    */
  get teneur(): Prisma.TeneurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produit`: Exposes CRUD operations for the **Produit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produits
    * const produits = await prisma.produit.findMany()
    * ```
    */
  get produit(): Prisma.ProduitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailVente`: Exposes CRUD operations for the **DetailVente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailVentes
    * const detailVentes = await prisma.detailVente.findMany()
    * ```
    */
  get detailVente(): Prisma.DetailVenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paiement`: Exposes CRUD operations for the **Paiement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paiements
    * const paiements = await prisma.paiement.findMany()
    * ```
    */
  get paiement(): Prisma.PaiementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vente`: Exposes CRUD operations for the **Vente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ventes
    * const ventes = await prisma.vente.findMany()
    * ```
    */
  get vente(): Prisma.VenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailAchat`: Exposes CRUD operations for the **DetailAchat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailAchats
    * const detailAchats = await prisma.detailAchat.findMany()
    * ```
    */
  get detailAchat(): Prisma.DetailAchatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achat`: Exposes CRUD operations for the **Achat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achats
    * const achats = await prisma.achat.findMany()
    * ```
    */
  get achat(): Prisma.AchatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Entreprise: 'Entreprise',
    Utilisateur: 'Utilisateur',
    Adresse: 'Adresse',
    Contact: 'Contact',
    Fournisseur: 'Fournisseur',
    Teneur: 'Teneur',
    Produit: 'Produit',
    DetailVente: 'DetailVente',
    Paiement: 'Paiement',
    Vente: 'Vente',
    DetailAchat: 'DetailAchat',
    Achat: 'Achat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "entreprise" | "utilisateur" | "adresse" | "contact" | "fournisseur" | "teneur" | "produit" | "detailVente" | "paiement" | "vente" | "detailAchat" | "achat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Entreprise: {
        payload: Prisma.$EntreprisePayload<ExtArgs>
        fields: Prisma.EntrepriseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntrepriseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntrepriseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          findFirst: {
            args: Prisma.EntrepriseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntrepriseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          findMany: {
            args: Prisma.EntrepriseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          create: {
            args: Prisma.EntrepriseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          createMany: {
            args: Prisma.EntrepriseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntrepriseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          delete: {
            args: Prisma.EntrepriseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          update: {
            args: Prisma.EntrepriseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          deleteMany: {
            args: Prisma.EntrepriseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntrepriseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntrepriseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>[]
          }
          upsert: {
            args: Prisma.EntrepriseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisePayload>
          }
          aggregate: {
            args: Prisma.EntrepriseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntreprise>
          }
          groupBy: {
            args: Prisma.EntrepriseGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrepriseGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntrepriseCountArgs<ExtArgs>
            result: $Utils.Optional<EntrepriseCountAggregateOutputType> | number
          }
        }
      }
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Adresse: {
        payload: Prisma.$AdressePayload<ExtArgs>
        fields: Prisma.AdresseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdresseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdresseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressePayload>
          }
          findFirst: {
            args: Prisma.AdresseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdresseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressePayload>
          }
          findMany: {
            args: Prisma.AdresseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressePayload>[]
          }
          create: {
            args: Prisma.AdresseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressePayload>
          }
          createMany: {
            args: Prisma.AdresseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdresseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressePayload>[]
          }
          delete: {
            args: Prisma.AdresseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressePayload>
          }
          update: {
            args: Prisma.AdresseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressePayload>
          }
          deleteMany: {
            args: Prisma.AdresseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdresseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdresseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressePayload>[]
          }
          upsert: {
            args: Prisma.AdresseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdressePayload>
          }
          aggregate: {
            args: Prisma.AdresseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdresse>
          }
          groupBy: {
            args: Prisma.AdresseGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdresseGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdresseCountArgs<ExtArgs>
            result: $Utils.Optional<AdresseCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Fournisseur: {
        payload: Prisma.$FournisseurPayload<ExtArgs>
        fields: Prisma.FournisseurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FournisseurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FournisseurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FournisseurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FournisseurPayload>
          }
          findFirst: {
            args: Prisma.FournisseurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FournisseurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FournisseurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FournisseurPayload>
          }
          findMany: {
            args: Prisma.FournisseurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FournisseurPayload>[]
          }
          create: {
            args: Prisma.FournisseurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FournisseurPayload>
          }
          createMany: {
            args: Prisma.FournisseurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FournisseurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FournisseurPayload>[]
          }
          delete: {
            args: Prisma.FournisseurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FournisseurPayload>
          }
          update: {
            args: Prisma.FournisseurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FournisseurPayload>
          }
          deleteMany: {
            args: Prisma.FournisseurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FournisseurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FournisseurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FournisseurPayload>[]
          }
          upsert: {
            args: Prisma.FournisseurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FournisseurPayload>
          }
          aggregate: {
            args: Prisma.FournisseurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFournisseur>
          }
          groupBy: {
            args: Prisma.FournisseurGroupByArgs<ExtArgs>
            result: $Utils.Optional<FournisseurGroupByOutputType>[]
          }
          count: {
            args: Prisma.FournisseurCountArgs<ExtArgs>
            result: $Utils.Optional<FournisseurCountAggregateOutputType> | number
          }
        }
      }
      Teneur: {
        payload: Prisma.$TeneurPayload<ExtArgs>
        fields: Prisma.TeneurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeneurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeneurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeneurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeneurPayload>
          }
          findFirst: {
            args: Prisma.TeneurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeneurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeneurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeneurPayload>
          }
          findMany: {
            args: Prisma.TeneurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeneurPayload>[]
          }
          create: {
            args: Prisma.TeneurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeneurPayload>
          }
          createMany: {
            args: Prisma.TeneurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeneurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeneurPayload>[]
          }
          delete: {
            args: Prisma.TeneurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeneurPayload>
          }
          update: {
            args: Prisma.TeneurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeneurPayload>
          }
          deleteMany: {
            args: Prisma.TeneurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeneurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeneurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeneurPayload>[]
          }
          upsert: {
            args: Prisma.TeneurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeneurPayload>
          }
          aggregate: {
            args: Prisma.TeneurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeneur>
          }
          groupBy: {
            args: Prisma.TeneurGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeneurGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeneurCountArgs<ExtArgs>
            result: $Utils.Optional<TeneurCountAggregateOutputType> | number
          }
        }
      }
      Produit: {
        payload: Prisma.$ProduitPayload<ExtArgs>
        fields: Prisma.ProduitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProduitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProduitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          findFirst: {
            args: Prisma.ProduitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProduitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          findMany: {
            args: Prisma.ProduitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          create: {
            args: Prisma.ProduitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          createMany: {
            args: Prisma.ProduitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProduitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          delete: {
            args: Prisma.ProduitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          update: {
            args: Prisma.ProduitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          deleteMany: {
            args: Prisma.ProduitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProduitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProduitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          upsert: {
            args: Prisma.ProduitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          aggregate: {
            args: Prisma.ProduitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduit>
          }
          groupBy: {
            args: Prisma.ProduitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProduitCountArgs<ExtArgs>
            result: $Utils.Optional<ProduitCountAggregateOutputType> | number
          }
        }
      }
      DetailVente: {
        payload: Prisma.$DetailVentePayload<ExtArgs>
        fields: Prisma.DetailVenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailVenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailVentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailVenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailVentePayload>
          }
          findFirst: {
            args: Prisma.DetailVenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailVentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailVenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailVentePayload>
          }
          findMany: {
            args: Prisma.DetailVenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailVentePayload>[]
          }
          create: {
            args: Prisma.DetailVenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailVentePayload>
          }
          createMany: {
            args: Prisma.DetailVenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetailVenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailVentePayload>[]
          }
          delete: {
            args: Prisma.DetailVenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailVentePayload>
          }
          update: {
            args: Prisma.DetailVenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailVentePayload>
          }
          deleteMany: {
            args: Prisma.DetailVenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailVenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetailVenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailVentePayload>[]
          }
          upsert: {
            args: Prisma.DetailVenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailVentePayload>
          }
          aggregate: {
            args: Prisma.DetailVenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailVente>
          }
          groupBy: {
            args: Prisma.DetailVenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailVenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailVenteCountArgs<ExtArgs>
            result: $Utils.Optional<DetailVenteCountAggregateOutputType> | number
          }
        }
      }
      Paiement: {
        payload: Prisma.$PaiementPayload<ExtArgs>
        fields: Prisma.PaiementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaiementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaiementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findFirst: {
            args: Prisma.PaiementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaiementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findMany: {
            args: Prisma.PaiementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          create: {
            args: Prisma.PaiementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          createMany: {
            args: Prisma.PaiementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaiementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          delete: {
            args: Prisma.PaiementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          update: {
            args: Prisma.PaiementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          deleteMany: {
            args: Prisma.PaiementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaiementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaiementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          upsert: {
            args: Prisma.PaiementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          aggregate: {
            args: Prisma.PaiementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaiement>
          }
          groupBy: {
            args: Prisma.PaiementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaiementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaiementCountArgs<ExtArgs>
            result: $Utils.Optional<PaiementCountAggregateOutputType> | number
          }
        }
      }
      Vente: {
        payload: Prisma.$VentePayload<ExtArgs>
        fields: Prisma.VenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentePayload>
          }
          findFirst: {
            args: Prisma.VenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentePayload>
          }
          findMany: {
            args: Prisma.VenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentePayload>[]
          }
          create: {
            args: Prisma.VenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentePayload>
          }
          createMany: {
            args: Prisma.VenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentePayload>[]
          }
          delete: {
            args: Prisma.VenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentePayload>
          }
          update: {
            args: Prisma.VenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentePayload>
          }
          deleteMany: {
            args: Prisma.VenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentePayload>[]
          }
          upsert: {
            args: Prisma.VenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentePayload>
          }
          aggregate: {
            args: Prisma.VenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVente>
          }
          groupBy: {
            args: Prisma.VenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenteCountArgs<ExtArgs>
            result: $Utils.Optional<VenteCountAggregateOutputType> | number
          }
        }
      }
      DetailAchat: {
        payload: Prisma.$DetailAchatPayload<ExtArgs>
        fields: Prisma.DetailAchatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailAchatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailAchatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailAchatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailAchatPayload>
          }
          findFirst: {
            args: Prisma.DetailAchatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailAchatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailAchatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailAchatPayload>
          }
          findMany: {
            args: Prisma.DetailAchatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailAchatPayload>[]
          }
          create: {
            args: Prisma.DetailAchatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailAchatPayload>
          }
          createMany: {
            args: Prisma.DetailAchatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetailAchatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailAchatPayload>[]
          }
          delete: {
            args: Prisma.DetailAchatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailAchatPayload>
          }
          update: {
            args: Prisma.DetailAchatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailAchatPayload>
          }
          deleteMany: {
            args: Prisma.DetailAchatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailAchatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetailAchatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailAchatPayload>[]
          }
          upsert: {
            args: Prisma.DetailAchatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailAchatPayload>
          }
          aggregate: {
            args: Prisma.DetailAchatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailAchat>
          }
          groupBy: {
            args: Prisma.DetailAchatGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailAchatGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailAchatCountArgs<ExtArgs>
            result: $Utils.Optional<DetailAchatCountAggregateOutputType> | number
          }
        }
      }
      Achat: {
        payload: Prisma.$AchatPayload<ExtArgs>
        fields: Prisma.AchatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchatPayload>
          }
          findFirst: {
            args: Prisma.AchatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchatPayload>
          }
          findMany: {
            args: Prisma.AchatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchatPayload>[]
          }
          create: {
            args: Prisma.AchatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchatPayload>
          }
          createMany: {
            args: Prisma.AchatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchatPayload>[]
          }
          delete: {
            args: Prisma.AchatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchatPayload>
          }
          update: {
            args: Prisma.AchatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchatPayload>
          }
          deleteMany: {
            args: Prisma.AchatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AchatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchatPayload>[]
          }
          upsert: {
            args: Prisma.AchatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchatPayload>
          }
          aggregate: {
            args: Prisma.AchatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchat>
          }
          groupBy: {
            args: Prisma.AchatGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchatGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchatCountArgs<ExtArgs>
            result: $Utils.Optional<AchatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    entreprise?: EntrepriseOmit
    utilisateur?: UtilisateurOmit
    adresse?: AdresseOmit
    contact?: ContactOmit
    fournisseur?: FournisseurOmit
    teneur?: TeneurOmit
    produit?: ProduitOmit
    detailVente?: DetailVenteOmit
    paiement?: PaiementOmit
    vente?: VenteOmit
    detailAchat?: DetailAchatOmit
    achat?: AchatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EntrepriseCountOutputType
   */

  export type EntrepriseCountOutputType = {
    Vente: number
  }

  export type EntrepriseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vente?: boolean | EntrepriseCountOutputTypeCountVenteArgs
  }

  // Custom InputTypes
  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntrepriseCountOutputType
     */
    select?: EntrepriseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntrepriseCountOutputType without action
   */
  export type EntrepriseCountOutputTypeCountVenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenteWhereInput
  }


  /**
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    Adresse: number
    Contact: number
    Produit: number
    Vente: number
    Achat: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adresse?: boolean | UtilisateurCountOutputTypeCountAdresseArgs
    Contact?: boolean | UtilisateurCountOutputTypeCountContactArgs
    Produit?: boolean | UtilisateurCountOutputTypeCountProduitArgs
    Vente?: boolean | UtilisateurCountOutputTypeCountVenteArgs
    Achat?: boolean | UtilisateurCountOutputTypeCountAchatArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountAdresseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdresseWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountProduitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountVenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenteWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountAchatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchatWhereInput
  }


  /**
   * Count Type AdresseCountOutputType
   */

  export type AdresseCountOutputType = {
    Fournisseur: number
  }

  export type AdresseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Fournisseur?: boolean | AdresseCountOutputTypeCountFournisseurArgs
  }

  // Custom InputTypes
  /**
   * AdresseCountOutputType without action
   */
  export type AdresseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdresseCountOutputType
     */
    select?: AdresseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdresseCountOutputType without action
   */
  export type AdresseCountOutputTypeCountFournisseurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FournisseurWhereInput
  }


  /**
   * Count Type ContactCountOutputType
   */

  export type ContactCountOutputType = {
    Fournisseur: number
  }

  export type ContactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Fournisseur?: boolean | ContactCountOutputTypeCountFournisseurArgs
  }

  // Custom InputTypes
  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactCountOutputType
     */
    select?: ContactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountFournisseurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FournisseurWhereInput
  }


  /**
   * Count Type FournisseurCountOutputType
   */

  export type FournisseurCountOutputType = {
    Vente: number
    Achat: number
  }

  export type FournisseurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vente?: boolean | FournisseurCountOutputTypeCountVenteArgs
    Achat?: boolean | FournisseurCountOutputTypeCountAchatArgs
  }

  // Custom InputTypes
  /**
   * FournisseurCountOutputType without action
   */
  export type FournisseurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FournisseurCountOutputType
     */
    select?: FournisseurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FournisseurCountOutputType without action
   */
  export type FournisseurCountOutputTypeCountVenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenteWhereInput
  }

  /**
   * FournisseurCountOutputType without action
   */
  export type FournisseurCountOutputTypeCountAchatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchatWhereInput
  }


  /**
   * Count Type TeneurCountOutputType
   */

  export type TeneurCountOutputType = {
    Produit: number
  }

  export type TeneurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produit?: boolean | TeneurCountOutputTypeCountProduitArgs
  }

  // Custom InputTypes
  /**
   * TeneurCountOutputType without action
   */
  export type TeneurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeneurCountOutputType
     */
    select?: TeneurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeneurCountOutputType without action
   */
  export type TeneurCountOutputTypeCountProduitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
  }


  /**
   * Count Type ProduitCountOutputType
   */

  export type ProduitCountOutputType = {
    DetailVente: number
    DetailAchat: number
  }

  export type ProduitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DetailVente?: boolean | ProduitCountOutputTypeCountDetailVenteArgs
    DetailAchat?: boolean | ProduitCountOutputTypeCountDetailAchatArgs
  }

  // Custom InputTypes
  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduitCountOutputType
     */
    select?: ProduitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeCountDetailVenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailVenteWhereInput
  }

  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeCountDetailAchatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailAchatWhereInput
  }


  /**
   * Count Type DetailVenteCountOutputType
   */

  export type DetailVenteCountOutputType = {
    Vente: number
  }

  export type DetailVenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vente?: boolean | DetailVenteCountOutputTypeCountVenteArgs
  }

  // Custom InputTypes
  /**
   * DetailVenteCountOutputType without action
   */
  export type DetailVenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVenteCountOutputType
     */
    select?: DetailVenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DetailVenteCountOutputType without action
   */
  export type DetailVenteCountOutputTypeCountVenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenteWhereInput
  }


  /**
   * Count Type PaiementCountOutputType
   */

  export type PaiementCountOutputType = {
    Vente: number
    Achat: number
  }

  export type PaiementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vente?: boolean | PaiementCountOutputTypeCountVenteArgs
    Achat?: boolean | PaiementCountOutputTypeCountAchatArgs
  }

  // Custom InputTypes
  /**
   * PaiementCountOutputType without action
   */
  export type PaiementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaiementCountOutputType
     */
    select?: PaiementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaiementCountOutputType without action
   */
  export type PaiementCountOutputTypeCountVenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenteWhereInput
  }

  /**
   * PaiementCountOutputType without action
   */
  export type PaiementCountOutputTypeCountAchatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchatWhereInput
  }


  /**
   * Count Type DetailAchatCountOutputType
   */

  export type DetailAchatCountOutputType = {
    Achat: number
  }

  export type DetailAchatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Achat?: boolean | DetailAchatCountOutputTypeCountAchatArgs
  }

  // Custom InputTypes
  /**
   * DetailAchatCountOutputType without action
   */
  export type DetailAchatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchatCountOutputType
     */
    select?: DetailAchatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DetailAchatCountOutputType without action
   */
  export type DetailAchatCountOutputTypeCountAchatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchatWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Entreprise
   */

  export type AggregateEntreprise = {
    _count: EntrepriseCountAggregateOutputType | null
    _avg: EntrepriseAvgAggregateOutputType | null
    _sum: EntrepriseSumAggregateOutputType | null
    _min: EntrepriseMinAggregateOutputType | null
    _max: EntrepriseMaxAggregateOutputType | null
  }

  export type EntrepriseAvgAggregateOutputType = {
    id: number | null
  }

  export type EntrepriseSumAggregateOutputType = {
    id: number | null
  }

  export type EntrepriseMinAggregateOutputType = {
    id: number | null
    nom: string | null
    encronyme: string | null
    code_postale: string | null
    adresse: string | null
    tel: string | null
    site: string | null
    email: string | null
    decription: string | null
    logo: string | null
  }

  export type EntrepriseMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    encronyme: string | null
    code_postale: string | null
    adresse: string | null
    tel: string | null
    site: string | null
    email: string | null
    decription: string | null
    logo: string | null
  }

  export type EntrepriseCountAggregateOutputType = {
    id: number
    nom: number
    encronyme: number
    code_postale: number
    adresse: number
    tel: number
    site: number
    email: number
    decription: number
    logo: number
    _all: number
  }


  export type EntrepriseAvgAggregateInputType = {
    id?: true
  }

  export type EntrepriseSumAggregateInputType = {
    id?: true
  }

  export type EntrepriseMinAggregateInputType = {
    id?: true
    nom?: true
    encronyme?: true
    code_postale?: true
    adresse?: true
    tel?: true
    site?: true
    email?: true
    decription?: true
    logo?: true
  }

  export type EntrepriseMaxAggregateInputType = {
    id?: true
    nom?: true
    encronyme?: true
    code_postale?: true
    adresse?: true
    tel?: true
    site?: true
    email?: true
    decription?: true
    logo?: true
  }

  export type EntrepriseCountAggregateInputType = {
    id?: true
    nom?: true
    encronyme?: true
    code_postale?: true
    adresse?: true
    tel?: true
    site?: true
    email?: true
    decription?: true
    logo?: true
    _all?: true
  }

  export type EntrepriseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprise to aggregate.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entreprises
    **/
    _count?: true | EntrepriseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntrepriseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrepriseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrepriseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrepriseMaxAggregateInputType
  }

  export type GetEntrepriseAggregateType<T extends EntrepriseAggregateArgs> = {
        [P in keyof T & keyof AggregateEntreprise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntreprise[P]>
      : GetScalarType<T[P], AggregateEntreprise[P]>
  }




  export type EntrepriseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrepriseWhereInput
    orderBy?: EntrepriseOrderByWithAggregationInput | EntrepriseOrderByWithAggregationInput[]
    by: EntrepriseScalarFieldEnum[] | EntrepriseScalarFieldEnum
    having?: EntrepriseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrepriseCountAggregateInputType | true
    _avg?: EntrepriseAvgAggregateInputType
    _sum?: EntrepriseSumAggregateInputType
    _min?: EntrepriseMinAggregateInputType
    _max?: EntrepriseMaxAggregateInputType
  }

  export type EntrepriseGroupByOutputType = {
    id: number
    nom: string
    encronyme: string
    code_postale: string
    adresse: string
    tel: string
    site: string | null
    email: string
    decription: string | null
    logo: string | null
    _count: EntrepriseCountAggregateOutputType | null
    _avg: EntrepriseAvgAggregateOutputType | null
    _sum: EntrepriseSumAggregateOutputType | null
    _min: EntrepriseMinAggregateOutputType | null
    _max: EntrepriseMaxAggregateOutputType | null
  }

  type GetEntrepriseGroupByPayload<T extends EntrepriseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrepriseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrepriseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrepriseGroupByOutputType[P]>
            : GetScalarType<T[P], EntrepriseGroupByOutputType[P]>
        }
      >
    >


  export type EntrepriseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    encronyme?: boolean
    code_postale?: boolean
    adresse?: boolean
    tel?: boolean
    site?: boolean
    email?: boolean
    decription?: boolean
    logo?: boolean
    Vente?: boolean | Entreprise$VenteArgs<ExtArgs>
    _count?: boolean | EntrepriseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    encronyme?: boolean
    code_postale?: boolean
    adresse?: boolean
    tel?: boolean
    site?: boolean
    email?: boolean
    decription?: boolean
    logo?: boolean
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    encronyme?: boolean
    code_postale?: boolean
    adresse?: boolean
    tel?: boolean
    site?: boolean
    email?: boolean
    decription?: boolean
    logo?: boolean
  }, ExtArgs["result"]["entreprise"]>

  export type EntrepriseSelectScalar = {
    id?: boolean
    nom?: boolean
    encronyme?: boolean
    code_postale?: boolean
    adresse?: boolean
    tel?: boolean
    site?: boolean
    email?: boolean
    decription?: boolean
    logo?: boolean
  }

  export type EntrepriseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "encronyme" | "code_postale" | "adresse" | "tel" | "site" | "email" | "decription" | "logo", ExtArgs["result"]["entreprise"]>
  export type EntrepriseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vente?: boolean | Entreprise$VenteArgs<ExtArgs>
    _count?: boolean | EntrepriseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntrepriseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EntrepriseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntreprisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entreprise"
    objects: {
      Vente: Prisma.$VentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      encronyme: string
      code_postale: string
      adresse: string
      tel: string
      site: string | null
      email: string
      decription: string | null
      logo: string | null
    }, ExtArgs["result"]["entreprise"]>
    composites: {}
  }

  type EntrepriseGetPayload<S extends boolean | null | undefined | EntrepriseDefaultArgs> = $Result.GetResult<Prisma.$EntreprisePayload, S>

  type EntrepriseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntrepriseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntrepriseCountAggregateInputType | true
    }

  export interface EntrepriseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entreprise'], meta: { name: 'Entreprise' } }
    /**
     * Find zero or one Entreprise that matches the filter.
     * @param {EntrepriseFindUniqueArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntrepriseFindUniqueArgs>(args: SelectSubset<T, EntrepriseFindUniqueArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entreprise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntrepriseFindUniqueOrThrowArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntrepriseFindUniqueOrThrowArgs>(args: SelectSubset<T, EntrepriseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindFirstArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntrepriseFindFirstArgs>(args?: SelectSubset<T, EntrepriseFindFirstArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindFirstOrThrowArgs} args - Arguments to find a Entreprise
     * @example
     * // Get one Entreprise
     * const entreprise = await prisma.entreprise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntrepriseFindFirstOrThrowArgs>(args?: SelectSubset<T, EntrepriseFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entreprises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entreprises
     * const entreprises = await prisma.entreprise.findMany()
     * 
     * // Get first 10 Entreprises
     * const entreprises = await prisma.entreprise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntrepriseFindManyArgs>(args?: SelectSubset<T, EntrepriseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entreprise.
     * @param {EntrepriseCreateArgs} args - Arguments to create a Entreprise.
     * @example
     * // Create one Entreprise
     * const Entreprise = await prisma.entreprise.create({
     *   data: {
     *     // ... data to create a Entreprise
     *   }
     * })
     * 
     */
    create<T extends EntrepriseCreateArgs>(args: SelectSubset<T, EntrepriseCreateArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entreprises.
     * @param {EntrepriseCreateManyArgs} args - Arguments to create many Entreprises.
     * @example
     * // Create many Entreprises
     * const entreprise = await prisma.entreprise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntrepriseCreateManyArgs>(args?: SelectSubset<T, EntrepriseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entreprises and returns the data saved in the database.
     * @param {EntrepriseCreateManyAndReturnArgs} args - Arguments to create many Entreprises.
     * @example
     * // Create many Entreprises
     * const entreprise = await prisma.entreprise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entreprises and only return the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntrepriseCreateManyAndReturnArgs>(args?: SelectSubset<T, EntrepriseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entreprise.
     * @param {EntrepriseDeleteArgs} args - Arguments to delete one Entreprise.
     * @example
     * // Delete one Entreprise
     * const Entreprise = await prisma.entreprise.delete({
     *   where: {
     *     // ... filter to delete one Entreprise
     *   }
     * })
     * 
     */
    delete<T extends EntrepriseDeleteArgs>(args: SelectSubset<T, EntrepriseDeleteArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entreprise.
     * @param {EntrepriseUpdateArgs} args - Arguments to update one Entreprise.
     * @example
     * // Update one Entreprise
     * const entreprise = await prisma.entreprise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntrepriseUpdateArgs>(args: SelectSubset<T, EntrepriseUpdateArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entreprises.
     * @param {EntrepriseDeleteManyArgs} args - Arguments to filter Entreprises to delete.
     * @example
     * // Delete a few Entreprises
     * const { count } = await prisma.entreprise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntrepriseDeleteManyArgs>(args?: SelectSubset<T, EntrepriseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entreprises
     * const entreprise = await prisma.entreprise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntrepriseUpdateManyArgs>(args: SelectSubset<T, EntrepriseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entreprises and returns the data updated in the database.
     * @param {EntrepriseUpdateManyAndReturnArgs} args - Arguments to update many Entreprises.
     * @example
     * // Update many Entreprises
     * const entreprise = await prisma.entreprise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entreprises and only return the `id`
     * const entrepriseWithIdOnly = await prisma.entreprise.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EntrepriseUpdateManyAndReturnArgs>(args: SelectSubset<T, EntrepriseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entreprise.
     * @param {EntrepriseUpsertArgs} args - Arguments to update or create a Entreprise.
     * @example
     * // Update or create a Entreprise
     * const entreprise = await prisma.entreprise.upsert({
     *   create: {
     *     // ... data to create a Entreprise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entreprise we want to update
     *   }
     * })
     */
    upsert<T extends EntrepriseUpsertArgs>(args: SelectSubset<T, EntrepriseUpsertArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseCountArgs} args - Arguments to filter Entreprises to count.
     * @example
     * // Count the number of Entreprises
     * const count = await prisma.entreprise.count({
     *   where: {
     *     // ... the filter for the Entreprises we want to count
     *   }
     * })
    **/
    count<T extends EntrepriseCountArgs>(
      args?: Subset<T, EntrepriseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrepriseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entreprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntrepriseAggregateArgs>(args: Subset<T, EntrepriseAggregateArgs>): Prisma.PrismaPromise<GetEntrepriseAggregateType<T>>

    /**
     * Group by Entreprise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrepriseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntrepriseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntrepriseGroupByArgs['orderBy'] }
        : { orderBy?: EntrepriseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntrepriseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrepriseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entreprise model
   */
  readonly fields: EntrepriseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entreprise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntrepriseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Vente<T extends Entreprise$VenteArgs<ExtArgs> = {}>(args?: Subset<T, Entreprise$VenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Entreprise model
   */
  interface EntrepriseFieldRefs {
    readonly id: FieldRef<"Entreprise", 'Int'>
    readonly nom: FieldRef<"Entreprise", 'String'>
    readonly encronyme: FieldRef<"Entreprise", 'String'>
    readonly code_postale: FieldRef<"Entreprise", 'String'>
    readonly adresse: FieldRef<"Entreprise", 'String'>
    readonly tel: FieldRef<"Entreprise", 'String'>
    readonly site: FieldRef<"Entreprise", 'String'>
    readonly email: FieldRef<"Entreprise", 'String'>
    readonly decription: FieldRef<"Entreprise", 'String'>
    readonly logo: FieldRef<"Entreprise", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Entreprise findUnique
   */
  export type EntrepriseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise findUniqueOrThrow
   */
  export type EntrepriseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise findFirst
   */
  export type EntrepriseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise findFirstOrThrow
   */
  export type EntrepriseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprise to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise findMany
   */
  export type EntrepriseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter, which Entreprises to fetch.
     */
    where?: EntrepriseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntrepriseOrderByWithRelationInput | EntrepriseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entreprises.
     */
    cursor?: EntrepriseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    distinct?: EntrepriseScalarFieldEnum | EntrepriseScalarFieldEnum[]
  }

  /**
   * Entreprise create
   */
  export type EntrepriseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The data needed to create a Entreprise.
     */
    data: XOR<EntrepriseCreateInput, EntrepriseUncheckedCreateInput>
  }

  /**
   * Entreprise createMany
   */
  export type EntrepriseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entreprises.
     */
    data: EntrepriseCreateManyInput | EntrepriseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entreprise createManyAndReturn
   */
  export type EntrepriseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The data used to create many Entreprises.
     */
    data: EntrepriseCreateManyInput | EntrepriseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entreprise update
   */
  export type EntrepriseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The data needed to update a Entreprise.
     */
    data: XOR<EntrepriseUpdateInput, EntrepriseUncheckedUpdateInput>
    /**
     * Choose, which Entreprise to update.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise updateMany
   */
  export type EntrepriseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entreprises.
     */
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyInput>
    /**
     * Filter which Entreprises to update
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to update.
     */
    limit?: number
  }

  /**
   * Entreprise updateManyAndReturn
   */
  export type EntrepriseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * The data used to update Entreprises.
     */
    data: XOR<EntrepriseUpdateManyMutationInput, EntrepriseUncheckedUpdateManyInput>
    /**
     * Filter which Entreprises to update
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to update.
     */
    limit?: number
  }

  /**
   * Entreprise upsert
   */
  export type EntrepriseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * The filter to search for the Entreprise to update in case it exists.
     */
    where: EntrepriseWhereUniqueInput
    /**
     * In case the Entreprise found by the `where` argument doesn't exist, create a new Entreprise with this data.
     */
    create: XOR<EntrepriseCreateInput, EntrepriseUncheckedCreateInput>
    /**
     * In case the Entreprise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntrepriseUpdateInput, EntrepriseUncheckedUpdateInput>
  }

  /**
   * Entreprise delete
   */
  export type EntrepriseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
    /**
     * Filter which Entreprise to delete.
     */
    where: EntrepriseWhereUniqueInput
  }

  /**
   * Entreprise deleteMany
   */
  export type EntrepriseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprises to delete
     */
    where?: EntrepriseWhereInput
    /**
     * Limit how many Entreprises to delete.
     */
    limit?: number
  }

  /**
   * Entreprise.Vente
   */
  export type Entreprise$VenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    where?: VenteWhereInput
    orderBy?: VenteOrderByWithRelationInput | VenteOrderByWithRelationInput[]
    cursor?: VenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenteScalarFieldEnum | VenteScalarFieldEnum[]
  }

  /**
   * Entreprise without action
   */
  export type EntrepriseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprise
     */
    select?: EntrepriseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprise
     */
    omit?: EntrepriseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrepriseInclude<ExtArgs> | null
  }


  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: string | null
    email: string | null
    nom: string | null
    postnom: string | null
    nom_complet: string | null
    sexe: $Enums.Sexe | null
    role: $Enums.Role | null
    poste: $Enums.Poste | null
    picture: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: string | null
    email: string | null
    nom: string | null
    postnom: string | null
    nom_complet: string | null
    sexe: $Enums.Sexe | null
    role: $Enums.Role | null
    poste: $Enums.Poste | null
    picture: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    email: number
    nom: number
    postnom: number
    nom_complet: number
    sexe: number
    role: number
    poste: number
    picture: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UtilisateurMinAggregateInputType = {
    id?: true
    email?: true
    nom?: true
    postnom?: true
    nom_complet?: true
    sexe?: true
    role?: true
    poste?: true
    picture?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    email?: true
    nom?: true
    postnom?: true
    nom_complet?: true
    sexe?: true
    role?: true
    poste?: true
    picture?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    email?: true
    nom?: true
    postnom?: true
    nom_complet?: true
    sexe?: true
    role?: true
    poste?: true
    picture?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet: string | null
    sexe: $Enums.Sexe | null
    role: $Enums.Role
    poste: $Enums.Poste | null
    picture: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UtilisateurCountAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nom?: boolean
    postnom?: boolean
    nom_complet?: boolean
    sexe?: boolean
    role?: boolean
    poste?: boolean
    picture?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Adresse?: boolean | Utilisateur$AdresseArgs<ExtArgs>
    Contact?: boolean | Utilisateur$ContactArgs<ExtArgs>
    Produit?: boolean | Utilisateur$ProduitArgs<ExtArgs>
    Vente?: boolean | Utilisateur$VenteArgs<ExtArgs>
    Achat?: boolean | Utilisateur$AchatArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nom?: boolean
    postnom?: boolean
    nom_complet?: boolean
    sexe?: boolean
    role?: boolean
    poste?: boolean
    picture?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nom?: boolean
    postnom?: boolean
    nom_complet?: boolean
    sexe?: boolean
    role?: boolean
    poste?: boolean
    picture?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    email?: boolean
    nom?: boolean
    postnom?: boolean
    nom_complet?: boolean
    sexe?: boolean
    role?: boolean
    poste?: boolean
    picture?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nom" | "postnom" | "nom_complet" | "sexe" | "role" | "poste" | "picture" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Adresse?: boolean | Utilisateur$AdresseArgs<ExtArgs>
    Contact?: boolean | Utilisateur$ContactArgs<ExtArgs>
    Produit?: boolean | Utilisateur$ProduitArgs<ExtArgs>
    Vente?: boolean | Utilisateur$VenteArgs<ExtArgs>
    Achat?: boolean | Utilisateur$AchatArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      Adresse: Prisma.$AdressePayload<ExtArgs>[]
      Contact: Prisma.$ContactPayload<ExtArgs>[]
      Produit: Prisma.$ProduitPayload<ExtArgs>[]
      Vente: Prisma.$VentePayload<ExtArgs>[]
      Achat: Prisma.$AchatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      nom: string
      postnom: string
      nom_complet: string | null
      sexe: $Enums.Sexe | null
      role: $Enums.Role
      poste: $Enums.Poste | null
      picture: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Adresse<T extends Utilisateur$AdresseArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$AdresseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Contact<T extends Utilisateur$ContactArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$ContactArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Produit<T extends Utilisateur$ProduitArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$ProduitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Vente<T extends Utilisateur$VenteArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$VenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Achat<T extends Utilisateur$AchatArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$AchatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly postnom: FieldRef<"Utilisateur", 'String'>
    readonly nom_complet: FieldRef<"Utilisateur", 'String'>
    readonly sexe: FieldRef<"Utilisateur", 'Sexe'>
    readonly role: FieldRef<"Utilisateur", 'Role'>
    readonly poste: FieldRef<"Utilisateur", 'Poste'>
    readonly picture: FieldRef<"Utilisateur", 'String'>
    readonly password: FieldRef<"Utilisateur", 'String'>
    readonly createdAt: FieldRef<"Utilisateur", 'DateTime'>
    readonly updatedAt: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.Adresse
   */
  export type Utilisateur$AdresseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseInclude<ExtArgs> | null
    where?: AdresseWhereInput
    orderBy?: AdresseOrderByWithRelationInput | AdresseOrderByWithRelationInput[]
    cursor?: AdresseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdresseScalarFieldEnum | AdresseScalarFieldEnum[]
  }

  /**
   * Utilisateur.Contact
   */
  export type Utilisateur$ContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Utilisateur.Produit
   */
  export type Utilisateur$ProduitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    cursor?: ProduitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Utilisateur.Vente
   */
  export type Utilisateur$VenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    where?: VenteWhereInput
    orderBy?: VenteOrderByWithRelationInput | VenteOrderByWithRelationInput[]
    cursor?: VenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenteScalarFieldEnum | VenteScalarFieldEnum[]
  }

  /**
   * Utilisateur.Achat
   */
  export type Utilisateur$AchatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    where?: AchatWhereInput
    orderBy?: AchatOrderByWithRelationInput | AchatOrderByWithRelationInput[]
    cursor?: AchatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchatScalarFieldEnum | AchatScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Adresse
   */

  export type AggregateAdresse = {
    _count: AdresseCountAggregateOutputType | null
    _avg: AdresseAvgAggregateOutputType | null
    _sum: AdresseSumAggregateOutputType | null
    _min: AdresseMinAggregateOutputType | null
    _max: AdresseMaxAggregateOutputType | null
  }

  export type AdresseAvgAggregateOutputType = {
    id: number | null
  }

  export type AdresseSumAggregateOutputType = {
    id: number | null
  }

  export type AdresseMinAggregateOutputType = {
    id: number | null
    ville: string | null
    commune: string | null
    adresse: string | null
    utilisateurId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdresseMaxAggregateOutputType = {
    id: number | null
    ville: string | null
    commune: string | null
    adresse: string | null
    utilisateurId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdresseCountAggregateOutputType = {
    id: number
    ville: number
    commune: number
    adresse: number
    utilisateurId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdresseAvgAggregateInputType = {
    id?: true
  }

  export type AdresseSumAggregateInputType = {
    id?: true
  }

  export type AdresseMinAggregateInputType = {
    id?: true
    ville?: true
    commune?: true
    adresse?: true
    utilisateurId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdresseMaxAggregateInputType = {
    id?: true
    ville?: true
    commune?: true
    adresse?: true
    utilisateurId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdresseCountAggregateInputType = {
    id?: true
    ville?: true
    commune?: true
    adresse?: true
    utilisateurId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdresseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adresse to aggregate.
     */
    where?: AdresseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdresseOrderByWithRelationInput | AdresseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdresseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adresses
    **/
    _count?: true | AdresseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdresseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdresseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdresseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdresseMaxAggregateInputType
  }

  export type GetAdresseAggregateType<T extends AdresseAggregateArgs> = {
        [P in keyof T & keyof AggregateAdresse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdresse[P]>
      : GetScalarType<T[P], AggregateAdresse[P]>
  }




  export type AdresseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdresseWhereInput
    orderBy?: AdresseOrderByWithAggregationInput | AdresseOrderByWithAggregationInput[]
    by: AdresseScalarFieldEnum[] | AdresseScalarFieldEnum
    having?: AdresseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdresseCountAggregateInputType | true
    _avg?: AdresseAvgAggregateInputType
    _sum?: AdresseSumAggregateInputType
    _min?: AdresseMinAggregateInputType
    _max?: AdresseMaxAggregateInputType
  }

  export type AdresseGroupByOutputType = {
    id: number
    ville: string
    commune: string
    adresse: string
    utilisateurId: string
    createdAt: Date
    updatedAt: Date
    _count: AdresseCountAggregateOutputType | null
    _avg: AdresseAvgAggregateOutputType | null
    _sum: AdresseSumAggregateOutputType | null
    _min: AdresseMinAggregateOutputType | null
    _max: AdresseMaxAggregateOutputType | null
  }

  type GetAdresseGroupByPayload<T extends AdresseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdresseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdresseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdresseGroupByOutputType[P]>
            : GetScalarType<T[P], AdresseGroupByOutputType[P]>
        }
      >
    >


  export type AdresseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ville?: boolean
    commune?: boolean
    adresse?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Fournisseur?: boolean | Adresse$FournisseurArgs<ExtArgs>
    _count?: boolean | AdresseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adresse"]>

  export type AdresseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ville?: boolean
    commune?: boolean
    adresse?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adresse"]>

  export type AdresseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ville?: boolean
    commune?: boolean
    adresse?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adresse"]>

  export type AdresseSelectScalar = {
    id?: boolean
    ville?: boolean
    commune?: boolean
    adresse?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdresseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ville" | "commune" | "adresse" | "utilisateurId" | "createdAt" | "updatedAt", ExtArgs["result"]["adresse"]>
  export type AdresseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Fournisseur?: boolean | Adresse$FournisseurArgs<ExtArgs>
    _count?: boolean | AdresseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdresseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type AdresseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $AdressePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Adresse"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      Fournisseur: Prisma.$FournisseurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ville: string
      commune: string
      adresse: string
      utilisateurId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adresse"]>
    composites: {}
  }

  type AdresseGetPayload<S extends boolean | null | undefined | AdresseDefaultArgs> = $Result.GetResult<Prisma.$AdressePayload, S>

  type AdresseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdresseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdresseCountAggregateInputType | true
    }

  export interface AdresseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Adresse'], meta: { name: 'Adresse' } }
    /**
     * Find zero or one Adresse that matches the filter.
     * @param {AdresseFindUniqueArgs} args - Arguments to find a Adresse
     * @example
     * // Get one Adresse
     * const adresse = await prisma.adresse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdresseFindUniqueArgs>(args: SelectSubset<T, AdresseFindUniqueArgs<ExtArgs>>): Prisma__AdresseClient<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adresse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdresseFindUniqueOrThrowArgs} args - Arguments to find a Adresse
     * @example
     * // Get one Adresse
     * const adresse = await prisma.adresse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdresseFindUniqueOrThrowArgs>(args: SelectSubset<T, AdresseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdresseClient<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adresse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdresseFindFirstArgs} args - Arguments to find a Adresse
     * @example
     * // Get one Adresse
     * const adresse = await prisma.adresse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdresseFindFirstArgs>(args?: SelectSubset<T, AdresseFindFirstArgs<ExtArgs>>): Prisma__AdresseClient<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adresse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdresseFindFirstOrThrowArgs} args - Arguments to find a Adresse
     * @example
     * // Get one Adresse
     * const adresse = await prisma.adresse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdresseFindFirstOrThrowArgs>(args?: SelectSubset<T, AdresseFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdresseClient<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdresseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adresses
     * const adresses = await prisma.adresse.findMany()
     * 
     * // Get first 10 Adresses
     * const adresses = await prisma.adresse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adresseWithIdOnly = await prisma.adresse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdresseFindManyArgs>(args?: SelectSubset<T, AdresseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adresse.
     * @param {AdresseCreateArgs} args - Arguments to create a Adresse.
     * @example
     * // Create one Adresse
     * const Adresse = await prisma.adresse.create({
     *   data: {
     *     // ... data to create a Adresse
     *   }
     * })
     * 
     */
    create<T extends AdresseCreateArgs>(args: SelectSubset<T, AdresseCreateArgs<ExtArgs>>): Prisma__AdresseClient<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adresses.
     * @param {AdresseCreateManyArgs} args - Arguments to create many Adresses.
     * @example
     * // Create many Adresses
     * const adresse = await prisma.adresse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdresseCreateManyArgs>(args?: SelectSubset<T, AdresseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adresses and returns the data saved in the database.
     * @param {AdresseCreateManyAndReturnArgs} args - Arguments to create many Adresses.
     * @example
     * // Create many Adresses
     * const adresse = await prisma.adresse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adresses and only return the `id`
     * const adresseWithIdOnly = await prisma.adresse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdresseCreateManyAndReturnArgs>(args?: SelectSubset<T, AdresseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adresse.
     * @param {AdresseDeleteArgs} args - Arguments to delete one Adresse.
     * @example
     * // Delete one Adresse
     * const Adresse = await prisma.adresse.delete({
     *   where: {
     *     // ... filter to delete one Adresse
     *   }
     * })
     * 
     */
    delete<T extends AdresseDeleteArgs>(args: SelectSubset<T, AdresseDeleteArgs<ExtArgs>>): Prisma__AdresseClient<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adresse.
     * @param {AdresseUpdateArgs} args - Arguments to update one Adresse.
     * @example
     * // Update one Adresse
     * const adresse = await prisma.adresse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdresseUpdateArgs>(args: SelectSubset<T, AdresseUpdateArgs<ExtArgs>>): Prisma__AdresseClient<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adresses.
     * @param {AdresseDeleteManyArgs} args - Arguments to filter Adresses to delete.
     * @example
     * // Delete a few Adresses
     * const { count } = await prisma.adresse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdresseDeleteManyArgs>(args?: SelectSubset<T, AdresseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdresseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adresses
     * const adresse = await prisma.adresse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdresseUpdateManyArgs>(args: SelectSubset<T, AdresseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adresses and returns the data updated in the database.
     * @param {AdresseUpdateManyAndReturnArgs} args - Arguments to update many Adresses.
     * @example
     * // Update many Adresses
     * const adresse = await prisma.adresse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adresses and only return the `id`
     * const adresseWithIdOnly = await prisma.adresse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdresseUpdateManyAndReturnArgs>(args: SelectSubset<T, AdresseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adresse.
     * @param {AdresseUpsertArgs} args - Arguments to update or create a Adresse.
     * @example
     * // Update or create a Adresse
     * const adresse = await prisma.adresse.upsert({
     *   create: {
     *     // ... data to create a Adresse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adresse we want to update
     *   }
     * })
     */
    upsert<T extends AdresseUpsertArgs>(args: SelectSubset<T, AdresseUpsertArgs<ExtArgs>>): Prisma__AdresseClient<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdresseCountArgs} args - Arguments to filter Adresses to count.
     * @example
     * // Count the number of Adresses
     * const count = await prisma.adresse.count({
     *   where: {
     *     // ... the filter for the Adresses we want to count
     *   }
     * })
    **/
    count<T extends AdresseCountArgs>(
      args?: Subset<T, AdresseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdresseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adresse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdresseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdresseAggregateArgs>(args: Subset<T, AdresseAggregateArgs>): Prisma.PrismaPromise<GetAdresseAggregateType<T>>

    /**
     * Group by Adresse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdresseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdresseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdresseGroupByArgs['orderBy'] }
        : { orderBy?: AdresseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdresseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdresseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Adresse model
   */
  readonly fields: AdresseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Adresse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdresseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Fournisseur<T extends Adresse$FournisseurArgs<ExtArgs> = {}>(args?: Subset<T, Adresse$FournisseurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Adresse model
   */
  interface AdresseFieldRefs {
    readonly id: FieldRef<"Adresse", 'Int'>
    readonly ville: FieldRef<"Adresse", 'String'>
    readonly commune: FieldRef<"Adresse", 'String'>
    readonly adresse: FieldRef<"Adresse", 'String'>
    readonly utilisateurId: FieldRef<"Adresse", 'String'>
    readonly createdAt: FieldRef<"Adresse", 'DateTime'>
    readonly updatedAt: FieldRef<"Adresse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Adresse findUnique
   */
  export type AdresseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseInclude<ExtArgs> | null
    /**
     * Filter, which Adresse to fetch.
     */
    where: AdresseWhereUniqueInput
  }

  /**
   * Adresse findUniqueOrThrow
   */
  export type AdresseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseInclude<ExtArgs> | null
    /**
     * Filter, which Adresse to fetch.
     */
    where: AdresseWhereUniqueInput
  }

  /**
   * Adresse findFirst
   */
  export type AdresseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseInclude<ExtArgs> | null
    /**
     * Filter, which Adresse to fetch.
     */
    where?: AdresseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdresseOrderByWithRelationInput | AdresseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adresses.
     */
    cursor?: AdresseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adresses.
     */
    distinct?: AdresseScalarFieldEnum | AdresseScalarFieldEnum[]
  }

  /**
   * Adresse findFirstOrThrow
   */
  export type AdresseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseInclude<ExtArgs> | null
    /**
     * Filter, which Adresse to fetch.
     */
    where?: AdresseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdresseOrderByWithRelationInput | AdresseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adresses.
     */
    cursor?: AdresseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adresses.
     */
    distinct?: AdresseScalarFieldEnum | AdresseScalarFieldEnum[]
  }

  /**
   * Adresse findMany
   */
  export type AdresseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseInclude<ExtArgs> | null
    /**
     * Filter, which Adresses to fetch.
     */
    where?: AdresseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     */
    orderBy?: AdresseOrderByWithRelationInput | AdresseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adresses.
     */
    cursor?: AdresseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     */
    skip?: number
    distinct?: AdresseScalarFieldEnum | AdresseScalarFieldEnum[]
  }

  /**
   * Adresse create
   */
  export type AdresseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseInclude<ExtArgs> | null
    /**
     * The data needed to create a Adresse.
     */
    data: XOR<AdresseCreateInput, AdresseUncheckedCreateInput>
  }

  /**
   * Adresse createMany
   */
  export type AdresseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adresses.
     */
    data: AdresseCreateManyInput | AdresseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Adresse createManyAndReturn
   */
  export type AdresseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * The data used to create many Adresses.
     */
    data: AdresseCreateManyInput | AdresseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adresse update
   */
  export type AdresseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseInclude<ExtArgs> | null
    /**
     * The data needed to update a Adresse.
     */
    data: XOR<AdresseUpdateInput, AdresseUncheckedUpdateInput>
    /**
     * Choose, which Adresse to update.
     */
    where: AdresseWhereUniqueInput
  }

  /**
   * Adresse updateMany
   */
  export type AdresseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Adresses.
     */
    data: XOR<AdresseUpdateManyMutationInput, AdresseUncheckedUpdateManyInput>
    /**
     * Filter which Adresses to update
     */
    where?: AdresseWhereInput
    /**
     * Limit how many Adresses to update.
     */
    limit?: number
  }

  /**
   * Adresse updateManyAndReturn
   */
  export type AdresseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * The data used to update Adresses.
     */
    data: XOR<AdresseUpdateManyMutationInput, AdresseUncheckedUpdateManyInput>
    /**
     * Filter which Adresses to update
     */
    where?: AdresseWhereInput
    /**
     * Limit how many Adresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Adresse upsert
   */
  export type AdresseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseInclude<ExtArgs> | null
    /**
     * The filter to search for the Adresse to update in case it exists.
     */
    where: AdresseWhereUniqueInput
    /**
     * In case the Adresse found by the `where` argument doesn't exist, create a new Adresse with this data.
     */
    create: XOR<AdresseCreateInput, AdresseUncheckedCreateInput>
    /**
     * In case the Adresse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdresseUpdateInput, AdresseUncheckedUpdateInput>
  }

  /**
   * Adresse delete
   */
  export type AdresseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseInclude<ExtArgs> | null
    /**
     * Filter which Adresse to delete.
     */
    where: AdresseWhereUniqueInput
  }

  /**
   * Adresse deleteMany
   */
  export type AdresseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Adresses to delete
     */
    where?: AdresseWhereInput
    /**
     * Limit how many Adresses to delete.
     */
    limit?: number
  }

  /**
   * Adresse.Fournisseur
   */
  export type Adresse$FournisseurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
    where?: FournisseurWhereInput
    orderBy?: FournisseurOrderByWithRelationInput | FournisseurOrderByWithRelationInput[]
    cursor?: FournisseurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FournisseurScalarFieldEnum | FournisseurScalarFieldEnum[]
  }

  /**
   * Adresse without action
   */
  export type AdresseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adresse
     */
    select?: AdresseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Adresse
     */
    omit?: AdresseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdresseInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    tel: string | null
    utilisateurId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    tel: string | null
    utilisateurId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    tel: number
    utilisateurId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    tel?: true
    utilisateurId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    tel?: true
    utilisateurId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    tel?: true
    utilisateurId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    tel: string
    utilisateurId: string
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tel?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Fournisseur?: boolean | Contact$FournisseurArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tel?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tel?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    tel?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tel" | "utilisateurId" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Fournisseur?: boolean | Contact$FournisseurArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      Fournisseur: Prisma.$FournisseurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tel: string
      utilisateurId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Fournisseur<T extends Contact$FournisseurArgs<ExtArgs> = {}>(args?: Subset<T, Contact$FournisseurArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly tel: FieldRef<"Contact", 'String'>
    readonly utilisateurId: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact.Fournisseur
   */
  export type Contact$FournisseurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
    where?: FournisseurWhereInput
    orderBy?: FournisseurOrderByWithRelationInput | FournisseurOrderByWithRelationInput[]
    cursor?: FournisseurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FournisseurScalarFieldEnum | FournisseurScalarFieldEnum[]
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model Fournisseur
   */

  export type AggregateFournisseur = {
    _count: FournisseurCountAggregateOutputType | null
    _avg: FournisseurAvgAggregateOutputType | null
    _sum: FournisseurSumAggregateOutputType | null
    _min: FournisseurMinAggregateOutputType | null
    _max: FournisseurMaxAggregateOutputType | null
  }

  export type FournisseurAvgAggregateOutputType = {
    id: number | null
    adresseId: number | null
    contactId: number | null
  }

  export type FournisseurSumAggregateOutputType = {
    id: number | null
    adresseId: number | null
    contactId: number | null
  }

  export type FournisseurMinAggregateOutputType = {
    id: number | null
    nom: string | null
    email: string | null
    code_postal: string | null
    adresseId: number | null
    contactId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FournisseurMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    email: string | null
    code_postal: string | null
    adresseId: number | null
    contactId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FournisseurCountAggregateOutputType = {
    id: number
    nom: number
    email: number
    code_postal: number
    adresseId: number
    contactId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FournisseurAvgAggregateInputType = {
    id?: true
    adresseId?: true
    contactId?: true
  }

  export type FournisseurSumAggregateInputType = {
    id?: true
    adresseId?: true
    contactId?: true
  }

  export type FournisseurMinAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    code_postal?: true
    adresseId?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FournisseurMaxAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    code_postal?: true
    adresseId?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FournisseurCountAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    code_postal?: true
    adresseId?: true
    contactId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FournisseurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fournisseur to aggregate.
     */
    where?: FournisseurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fournisseurs to fetch.
     */
    orderBy?: FournisseurOrderByWithRelationInput | FournisseurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FournisseurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fournisseurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fournisseurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fournisseurs
    **/
    _count?: true | FournisseurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FournisseurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FournisseurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FournisseurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FournisseurMaxAggregateInputType
  }

  export type GetFournisseurAggregateType<T extends FournisseurAggregateArgs> = {
        [P in keyof T & keyof AggregateFournisseur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFournisseur[P]>
      : GetScalarType<T[P], AggregateFournisseur[P]>
  }




  export type FournisseurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FournisseurWhereInput
    orderBy?: FournisseurOrderByWithAggregationInput | FournisseurOrderByWithAggregationInput[]
    by: FournisseurScalarFieldEnum[] | FournisseurScalarFieldEnum
    having?: FournisseurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FournisseurCountAggregateInputType | true
    _avg?: FournisseurAvgAggregateInputType
    _sum?: FournisseurSumAggregateInputType
    _min?: FournisseurMinAggregateInputType
    _max?: FournisseurMaxAggregateInputType
  }

  export type FournisseurGroupByOutputType = {
    id: number
    nom: string
    email: string
    code_postal: string | null
    adresseId: number
    contactId: number
    createdAt: Date
    updatedAt: Date
    _count: FournisseurCountAggregateOutputType | null
    _avg: FournisseurAvgAggregateOutputType | null
    _sum: FournisseurSumAggregateOutputType | null
    _min: FournisseurMinAggregateOutputType | null
    _max: FournisseurMaxAggregateOutputType | null
  }

  type GetFournisseurGroupByPayload<T extends FournisseurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FournisseurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FournisseurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FournisseurGroupByOutputType[P]>
            : GetScalarType<T[P], FournisseurGroupByOutputType[P]>
        }
      >
    >


  export type FournisseurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    code_postal?: boolean
    adresseId?: boolean
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adresse?: boolean | AdresseDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    Vente?: boolean | Fournisseur$VenteArgs<ExtArgs>
    Achat?: boolean | Fournisseur$AchatArgs<ExtArgs>
    _count?: boolean | FournisseurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fournisseur"]>

  export type FournisseurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    code_postal?: boolean
    adresseId?: boolean
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adresse?: boolean | AdresseDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fournisseur"]>

  export type FournisseurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    code_postal?: boolean
    adresseId?: boolean
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adresse?: boolean | AdresseDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fournisseur"]>

  export type FournisseurSelectScalar = {
    id?: boolean
    nom?: boolean
    email?: boolean
    code_postal?: boolean
    adresseId?: boolean
    contactId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FournisseurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "email" | "code_postal" | "adresseId" | "contactId" | "createdAt" | "updatedAt", ExtArgs["result"]["fournisseur"]>
  export type FournisseurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adresse?: boolean | AdresseDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
    Vente?: boolean | Fournisseur$VenteArgs<ExtArgs>
    Achat?: boolean | Fournisseur$AchatArgs<ExtArgs>
    _count?: boolean | FournisseurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FournisseurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adresse?: boolean | AdresseDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type FournisseurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adresse?: boolean | AdresseDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }

  export type $FournisseurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fournisseur"
    objects: {
      adresse: Prisma.$AdressePayload<ExtArgs>
      contact: Prisma.$ContactPayload<ExtArgs>
      Vente: Prisma.$VentePayload<ExtArgs>[]
      Achat: Prisma.$AchatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      email: string
      code_postal: string | null
      adresseId: number
      contactId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fournisseur"]>
    composites: {}
  }

  type FournisseurGetPayload<S extends boolean | null | undefined | FournisseurDefaultArgs> = $Result.GetResult<Prisma.$FournisseurPayload, S>

  type FournisseurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FournisseurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FournisseurCountAggregateInputType | true
    }

  export interface FournisseurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fournisseur'], meta: { name: 'Fournisseur' } }
    /**
     * Find zero or one Fournisseur that matches the filter.
     * @param {FournisseurFindUniqueArgs} args - Arguments to find a Fournisseur
     * @example
     * // Get one Fournisseur
     * const fournisseur = await prisma.fournisseur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FournisseurFindUniqueArgs>(args: SelectSubset<T, FournisseurFindUniqueArgs<ExtArgs>>): Prisma__FournisseurClient<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fournisseur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FournisseurFindUniqueOrThrowArgs} args - Arguments to find a Fournisseur
     * @example
     * // Get one Fournisseur
     * const fournisseur = await prisma.fournisseur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FournisseurFindUniqueOrThrowArgs>(args: SelectSubset<T, FournisseurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FournisseurClient<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fournisseur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FournisseurFindFirstArgs} args - Arguments to find a Fournisseur
     * @example
     * // Get one Fournisseur
     * const fournisseur = await prisma.fournisseur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FournisseurFindFirstArgs>(args?: SelectSubset<T, FournisseurFindFirstArgs<ExtArgs>>): Prisma__FournisseurClient<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fournisseur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FournisseurFindFirstOrThrowArgs} args - Arguments to find a Fournisseur
     * @example
     * // Get one Fournisseur
     * const fournisseur = await prisma.fournisseur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FournisseurFindFirstOrThrowArgs>(args?: SelectSubset<T, FournisseurFindFirstOrThrowArgs<ExtArgs>>): Prisma__FournisseurClient<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fournisseurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FournisseurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fournisseurs
     * const fournisseurs = await prisma.fournisseur.findMany()
     * 
     * // Get first 10 Fournisseurs
     * const fournisseurs = await prisma.fournisseur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fournisseurWithIdOnly = await prisma.fournisseur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FournisseurFindManyArgs>(args?: SelectSubset<T, FournisseurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fournisseur.
     * @param {FournisseurCreateArgs} args - Arguments to create a Fournisseur.
     * @example
     * // Create one Fournisseur
     * const Fournisseur = await prisma.fournisseur.create({
     *   data: {
     *     // ... data to create a Fournisseur
     *   }
     * })
     * 
     */
    create<T extends FournisseurCreateArgs>(args: SelectSubset<T, FournisseurCreateArgs<ExtArgs>>): Prisma__FournisseurClient<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fournisseurs.
     * @param {FournisseurCreateManyArgs} args - Arguments to create many Fournisseurs.
     * @example
     * // Create many Fournisseurs
     * const fournisseur = await prisma.fournisseur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FournisseurCreateManyArgs>(args?: SelectSubset<T, FournisseurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fournisseurs and returns the data saved in the database.
     * @param {FournisseurCreateManyAndReturnArgs} args - Arguments to create many Fournisseurs.
     * @example
     * // Create many Fournisseurs
     * const fournisseur = await prisma.fournisseur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fournisseurs and only return the `id`
     * const fournisseurWithIdOnly = await prisma.fournisseur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FournisseurCreateManyAndReturnArgs>(args?: SelectSubset<T, FournisseurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fournisseur.
     * @param {FournisseurDeleteArgs} args - Arguments to delete one Fournisseur.
     * @example
     * // Delete one Fournisseur
     * const Fournisseur = await prisma.fournisseur.delete({
     *   where: {
     *     // ... filter to delete one Fournisseur
     *   }
     * })
     * 
     */
    delete<T extends FournisseurDeleteArgs>(args: SelectSubset<T, FournisseurDeleteArgs<ExtArgs>>): Prisma__FournisseurClient<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fournisseur.
     * @param {FournisseurUpdateArgs} args - Arguments to update one Fournisseur.
     * @example
     * // Update one Fournisseur
     * const fournisseur = await prisma.fournisseur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FournisseurUpdateArgs>(args: SelectSubset<T, FournisseurUpdateArgs<ExtArgs>>): Prisma__FournisseurClient<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fournisseurs.
     * @param {FournisseurDeleteManyArgs} args - Arguments to filter Fournisseurs to delete.
     * @example
     * // Delete a few Fournisseurs
     * const { count } = await prisma.fournisseur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FournisseurDeleteManyArgs>(args?: SelectSubset<T, FournisseurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fournisseurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FournisseurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fournisseurs
     * const fournisseur = await prisma.fournisseur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FournisseurUpdateManyArgs>(args: SelectSubset<T, FournisseurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fournisseurs and returns the data updated in the database.
     * @param {FournisseurUpdateManyAndReturnArgs} args - Arguments to update many Fournisseurs.
     * @example
     * // Update many Fournisseurs
     * const fournisseur = await prisma.fournisseur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fournisseurs and only return the `id`
     * const fournisseurWithIdOnly = await prisma.fournisseur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FournisseurUpdateManyAndReturnArgs>(args: SelectSubset<T, FournisseurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fournisseur.
     * @param {FournisseurUpsertArgs} args - Arguments to update or create a Fournisseur.
     * @example
     * // Update or create a Fournisseur
     * const fournisseur = await prisma.fournisseur.upsert({
     *   create: {
     *     // ... data to create a Fournisseur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fournisseur we want to update
     *   }
     * })
     */
    upsert<T extends FournisseurUpsertArgs>(args: SelectSubset<T, FournisseurUpsertArgs<ExtArgs>>): Prisma__FournisseurClient<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fournisseurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FournisseurCountArgs} args - Arguments to filter Fournisseurs to count.
     * @example
     * // Count the number of Fournisseurs
     * const count = await prisma.fournisseur.count({
     *   where: {
     *     // ... the filter for the Fournisseurs we want to count
     *   }
     * })
    **/
    count<T extends FournisseurCountArgs>(
      args?: Subset<T, FournisseurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FournisseurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fournisseur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FournisseurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FournisseurAggregateArgs>(args: Subset<T, FournisseurAggregateArgs>): Prisma.PrismaPromise<GetFournisseurAggregateType<T>>

    /**
     * Group by Fournisseur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FournisseurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FournisseurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FournisseurGroupByArgs['orderBy'] }
        : { orderBy?: FournisseurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FournisseurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFournisseurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fournisseur model
   */
  readonly fields: FournisseurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fournisseur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FournisseurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adresse<T extends AdresseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdresseDefaultArgs<ExtArgs>>): Prisma__AdresseClient<$Result.GetResult<Prisma.$AdressePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactDefaultArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Vente<T extends Fournisseur$VenteArgs<ExtArgs> = {}>(args?: Subset<T, Fournisseur$VenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Achat<T extends Fournisseur$AchatArgs<ExtArgs> = {}>(args?: Subset<T, Fournisseur$AchatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fournisseur model
   */
  interface FournisseurFieldRefs {
    readonly id: FieldRef<"Fournisseur", 'Int'>
    readonly nom: FieldRef<"Fournisseur", 'String'>
    readonly email: FieldRef<"Fournisseur", 'String'>
    readonly code_postal: FieldRef<"Fournisseur", 'String'>
    readonly adresseId: FieldRef<"Fournisseur", 'Int'>
    readonly contactId: FieldRef<"Fournisseur", 'Int'>
    readonly createdAt: FieldRef<"Fournisseur", 'DateTime'>
    readonly updatedAt: FieldRef<"Fournisseur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fournisseur findUnique
   */
  export type FournisseurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
    /**
     * Filter, which Fournisseur to fetch.
     */
    where: FournisseurWhereUniqueInput
  }

  /**
   * Fournisseur findUniqueOrThrow
   */
  export type FournisseurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
    /**
     * Filter, which Fournisseur to fetch.
     */
    where: FournisseurWhereUniqueInput
  }

  /**
   * Fournisseur findFirst
   */
  export type FournisseurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
    /**
     * Filter, which Fournisseur to fetch.
     */
    where?: FournisseurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fournisseurs to fetch.
     */
    orderBy?: FournisseurOrderByWithRelationInput | FournisseurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fournisseurs.
     */
    cursor?: FournisseurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fournisseurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fournisseurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fournisseurs.
     */
    distinct?: FournisseurScalarFieldEnum | FournisseurScalarFieldEnum[]
  }

  /**
   * Fournisseur findFirstOrThrow
   */
  export type FournisseurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
    /**
     * Filter, which Fournisseur to fetch.
     */
    where?: FournisseurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fournisseurs to fetch.
     */
    orderBy?: FournisseurOrderByWithRelationInput | FournisseurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fournisseurs.
     */
    cursor?: FournisseurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fournisseurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fournisseurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fournisseurs.
     */
    distinct?: FournisseurScalarFieldEnum | FournisseurScalarFieldEnum[]
  }

  /**
   * Fournisseur findMany
   */
  export type FournisseurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
    /**
     * Filter, which Fournisseurs to fetch.
     */
    where?: FournisseurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fournisseurs to fetch.
     */
    orderBy?: FournisseurOrderByWithRelationInput | FournisseurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fournisseurs.
     */
    cursor?: FournisseurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fournisseurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fournisseurs.
     */
    skip?: number
    distinct?: FournisseurScalarFieldEnum | FournisseurScalarFieldEnum[]
  }

  /**
   * Fournisseur create
   */
  export type FournisseurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
    /**
     * The data needed to create a Fournisseur.
     */
    data: XOR<FournisseurCreateInput, FournisseurUncheckedCreateInput>
  }

  /**
   * Fournisseur createMany
   */
  export type FournisseurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fournisseurs.
     */
    data: FournisseurCreateManyInput | FournisseurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fournisseur createManyAndReturn
   */
  export type FournisseurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * The data used to create many Fournisseurs.
     */
    data: FournisseurCreateManyInput | FournisseurCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fournisseur update
   */
  export type FournisseurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
    /**
     * The data needed to update a Fournisseur.
     */
    data: XOR<FournisseurUpdateInput, FournisseurUncheckedUpdateInput>
    /**
     * Choose, which Fournisseur to update.
     */
    where: FournisseurWhereUniqueInput
  }

  /**
   * Fournisseur updateMany
   */
  export type FournisseurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fournisseurs.
     */
    data: XOR<FournisseurUpdateManyMutationInput, FournisseurUncheckedUpdateManyInput>
    /**
     * Filter which Fournisseurs to update
     */
    where?: FournisseurWhereInput
    /**
     * Limit how many Fournisseurs to update.
     */
    limit?: number
  }

  /**
   * Fournisseur updateManyAndReturn
   */
  export type FournisseurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * The data used to update Fournisseurs.
     */
    data: XOR<FournisseurUpdateManyMutationInput, FournisseurUncheckedUpdateManyInput>
    /**
     * Filter which Fournisseurs to update
     */
    where?: FournisseurWhereInput
    /**
     * Limit how many Fournisseurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fournisseur upsert
   */
  export type FournisseurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
    /**
     * The filter to search for the Fournisseur to update in case it exists.
     */
    where: FournisseurWhereUniqueInput
    /**
     * In case the Fournisseur found by the `where` argument doesn't exist, create a new Fournisseur with this data.
     */
    create: XOR<FournisseurCreateInput, FournisseurUncheckedCreateInput>
    /**
     * In case the Fournisseur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FournisseurUpdateInput, FournisseurUncheckedUpdateInput>
  }

  /**
   * Fournisseur delete
   */
  export type FournisseurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
    /**
     * Filter which Fournisseur to delete.
     */
    where: FournisseurWhereUniqueInput
  }

  /**
   * Fournisseur deleteMany
   */
  export type FournisseurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fournisseurs to delete
     */
    where?: FournisseurWhereInput
    /**
     * Limit how many Fournisseurs to delete.
     */
    limit?: number
  }

  /**
   * Fournisseur.Vente
   */
  export type Fournisseur$VenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    where?: VenteWhereInput
    orderBy?: VenteOrderByWithRelationInput | VenteOrderByWithRelationInput[]
    cursor?: VenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenteScalarFieldEnum | VenteScalarFieldEnum[]
  }

  /**
   * Fournisseur.Achat
   */
  export type Fournisseur$AchatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    where?: AchatWhereInput
    orderBy?: AchatOrderByWithRelationInput | AchatOrderByWithRelationInput[]
    cursor?: AchatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchatScalarFieldEnum | AchatScalarFieldEnum[]
  }

  /**
   * Fournisseur without action
   */
  export type FournisseurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
  }


  /**
   * Model Teneur
   */

  export type AggregateTeneur = {
    _count: TeneurCountAggregateOutputType | null
    _avg: TeneurAvgAggregateOutputType | null
    _sum: TeneurSumAggregateOutputType | null
    _min: TeneurMinAggregateOutputType | null
    _max: TeneurMaxAggregateOutputType | null
  }

  export type TeneurAvgAggregateOutputType = {
    id: number | null
    valeur: number | null
  }

  export type TeneurSumAggregateOutputType = {
    id: number | null
    valeur: number | null
  }

  export type TeneurMinAggregateOutputType = {
    id: number | null
    valeur: number | null
  }

  export type TeneurMaxAggregateOutputType = {
    id: number | null
    valeur: number | null
  }

  export type TeneurCountAggregateOutputType = {
    id: number
    valeur: number
    _all: number
  }


  export type TeneurAvgAggregateInputType = {
    id?: true
    valeur?: true
  }

  export type TeneurSumAggregateInputType = {
    id?: true
    valeur?: true
  }

  export type TeneurMinAggregateInputType = {
    id?: true
    valeur?: true
  }

  export type TeneurMaxAggregateInputType = {
    id?: true
    valeur?: true
  }

  export type TeneurCountAggregateInputType = {
    id?: true
    valeur?: true
    _all?: true
  }

  export type TeneurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teneur to aggregate.
     */
    where?: TeneurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teneurs to fetch.
     */
    orderBy?: TeneurOrderByWithRelationInput | TeneurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeneurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teneurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teneurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teneurs
    **/
    _count?: true | TeneurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeneurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeneurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeneurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeneurMaxAggregateInputType
  }

  export type GetTeneurAggregateType<T extends TeneurAggregateArgs> = {
        [P in keyof T & keyof AggregateTeneur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeneur[P]>
      : GetScalarType<T[P], AggregateTeneur[P]>
  }




  export type TeneurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeneurWhereInput
    orderBy?: TeneurOrderByWithAggregationInput | TeneurOrderByWithAggregationInput[]
    by: TeneurScalarFieldEnum[] | TeneurScalarFieldEnum
    having?: TeneurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeneurCountAggregateInputType | true
    _avg?: TeneurAvgAggregateInputType
    _sum?: TeneurSumAggregateInputType
    _min?: TeneurMinAggregateInputType
    _max?: TeneurMaxAggregateInputType
  }

  export type TeneurGroupByOutputType = {
    id: number
    valeur: number
    _count: TeneurCountAggregateOutputType | null
    _avg: TeneurAvgAggregateOutputType | null
    _sum: TeneurSumAggregateOutputType | null
    _min: TeneurMinAggregateOutputType | null
    _max: TeneurMaxAggregateOutputType | null
  }

  type GetTeneurGroupByPayload<T extends TeneurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeneurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeneurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeneurGroupByOutputType[P]>
            : GetScalarType<T[P], TeneurGroupByOutputType[P]>
        }
      >
    >


  export type TeneurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valeur?: boolean
    Produit?: boolean | Teneur$ProduitArgs<ExtArgs>
    _count?: boolean | TeneurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teneur"]>

  export type TeneurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valeur?: boolean
  }, ExtArgs["result"]["teneur"]>

  export type TeneurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valeur?: boolean
  }, ExtArgs["result"]["teneur"]>

  export type TeneurSelectScalar = {
    id?: boolean
    valeur?: boolean
  }

  export type TeneurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valeur", ExtArgs["result"]["teneur"]>
  export type TeneurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produit?: boolean | Teneur$ProduitArgs<ExtArgs>
    _count?: boolean | TeneurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeneurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeneurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeneurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teneur"
    objects: {
      Produit: Prisma.$ProduitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      valeur: number
    }, ExtArgs["result"]["teneur"]>
    composites: {}
  }

  type TeneurGetPayload<S extends boolean | null | undefined | TeneurDefaultArgs> = $Result.GetResult<Prisma.$TeneurPayload, S>

  type TeneurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeneurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeneurCountAggregateInputType | true
    }

  export interface TeneurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teneur'], meta: { name: 'Teneur' } }
    /**
     * Find zero or one Teneur that matches the filter.
     * @param {TeneurFindUniqueArgs} args - Arguments to find a Teneur
     * @example
     * // Get one Teneur
     * const teneur = await prisma.teneur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeneurFindUniqueArgs>(args: SelectSubset<T, TeneurFindUniqueArgs<ExtArgs>>): Prisma__TeneurClient<$Result.GetResult<Prisma.$TeneurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teneur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeneurFindUniqueOrThrowArgs} args - Arguments to find a Teneur
     * @example
     * // Get one Teneur
     * const teneur = await prisma.teneur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeneurFindUniqueOrThrowArgs>(args: SelectSubset<T, TeneurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeneurClient<$Result.GetResult<Prisma.$TeneurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teneur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeneurFindFirstArgs} args - Arguments to find a Teneur
     * @example
     * // Get one Teneur
     * const teneur = await prisma.teneur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeneurFindFirstArgs>(args?: SelectSubset<T, TeneurFindFirstArgs<ExtArgs>>): Prisma__TeneurClient<$Result.GetResult<Prisma.$TeneurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teneur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeneurFindFirstOrThrowArgs} args - Arguments to find a Teneur
     * @example
     * // Get one Teneur
     * const teneur = await prisma.teneur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeneurFindFirstOrThrowArgs>(args?: SelectSubset<T, TeneurFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeneurClient<$Result.GetResult<Prisma.$TeneurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teneurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeneurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teneurs
     * const teneurs = await prisma.teneur.findMany()
     * 
     * // Get first 10 Teneurs
     * const teneurs = await prisma.teneur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teneurWithIdOnly = await prisma.teneur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeneurFindManyArgs>(args?: SelectSubset<T, TeneurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeneurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teneur.
     * @param {TeneurCreateArgs} args - Arguments to create a Teneur.
     * @example
     * // Create one Teneur
     * const Teneur = await prisma.teneur.create({
     *   data: {
     *     // ... data to create a Teneur
     *   }
     * })
     * 
     */
    create<T extends TeneurCreateArgs>(args: SelectSubset<T, TeneurCreateArgs<ExtArgs>>): Prisma__TeneurClient<$Result.GetResult<Prisma.$TeneurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teneurs.
     * @param {TeneurCreateManyArgs} args - Arguments to create many Teneurs.
     * @example
     * // Create many Teneurs
     * const teneur = await prisma.teneur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeneurCreateManyArgs>(args?: SelectSubset<T, TeneurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teneurs and returns the data saved in the database.
     * @param {TeneurCreateManyAndReturnArgs} args - Arguments to create many Teneurs.
     * @example
     * // Create many Teneurs
     * const teneur = await prisma.teneur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teneurs and only return the `id`
     * const teneurWithIdOnly = await prisma.teneur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeneurCreateManyAndReturnArgs>(args?: SelectSubset<T, TeneurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeneurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teneur.
     * @param {TeneurDeleteArgs} args - Arguments to delete one Teneur.
     * @example
     * // Delete one Teneur
     * const Teneur = await prisma.teneur.delete({
     *   where: {
     *     // ... filter to delete one Teneur
     *   }
     * })
     * 
     */
    delete<T extends TeneurDeleteArgs>(args: SelectSubset<T, TeneurDeleteArgs<ExtArgs>>): Prisma__TeneurClient<$Result.GetResult<Prisma.$TeneurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teneur.
     * @param {TeneurUpdateArgs} args - Arguments to update one Teneur.
     * @example
     * // Update one Teneur
     * const teneur = await prisma.teneur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeneurUpdateArgs>(args: SelectSubset<T, TeneurUpdateArgs<ExtArgs>>): Prisma__TeneurClient<$Result.GetResult<Prisma.$TeneurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teneurs.
     * @param {TeneurDeleteManyArgs} args - Arguments to filter Teneurs to delete.
     * @example
     * // Delete a few Teneurs
     * const { count } = await prisma.teneur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeneurDeleteManyArgs>(args?: SelectSubset<T, TeneurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teneurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeneurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teneurs
     * const teneur = await prisma.teneur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeneurUpdateManyArgs>(args: SelectSubset<T, TeneurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teneurs and returns the data updated in the database.
     * @param {TeneurUpdateManyAndReturnArgs} args - Arguments to update many Teneurs.
     * @example
     * // Update many Teneurs
     * const teneur = await prisma.teneur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teneurs and only return the `id`
     * const teneurWithIdOnly = await prisma.teneur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeneurUpdateManyAndReturnArgs>(args: SelectSubset<T, TeneurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeneurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teneur.
     * @param {TeneurUpsertArgs} args - Arguments to update or create a Teneur.
     * @example
     * // Update or create a Teneur
     * const teneur = await prisma.teneur.upsert({
     *   create: {
     *     // ... data to create a Teneur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teneur we want to update
     *   }
     * })
     */
    upsert<T extends TeneurUpsertArgs>(args: SelectSubset<T, TeneurUpsertArgs<ExtArgs>>): Prisma__TeneurClient<$Result.GetResult<Prisma.$TeneurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teneurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeneurCountArgs} args - Arguments to filter Teneurs to count.
     * @example
     * // Count the number of Teneurs
     * const count = await prisma.teneur.count({
     *   where: {
     *     // ... the filter for the Teneurs we want to count
     *   }
     * })
    **/
    count<T extends TeneurCountArgs>(
      args?: Subset<T, TeneurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeneurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teneur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeneurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeneurAggregateArgs>(args: Subset<T, TeneurAggregateArgs>): Prisma.PrismaPromise<GetTeneurAggregateType<T>>

    /**
     * Group by Teneur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeneurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeneurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeneurGroupByArgs['orderBy'] }
        : { orderBy?: TeneurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeneurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeneurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teneur model
   */
  readonly fields: TeneurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teneur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeneurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Produit<T extends Teneur$ProduitArgs<ExtArgs> = {}>(args?: Subset<T, Teneur$ProduitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teneur model
   */
  interface TeneurFieldRefs {
    readonly id: FieldRef<"Teneur", 'Int'>
    readonly valeur: FieldRef<"Teneur", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Teneur findUnique
   */
  export type TeneurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teneur
     */
    select?: TeneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teneur
     */
    omit?: TeneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeneurInclude<ExtArgs> | null
    /**
     * Filter, which Teneur to fetch.
     */
    where: TeneurWhereUniqueInput
  }

  /**
   * Teneur findUniqueOrThrow
   */
  export type TeneurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teneur
     */
    select?: TeneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teneur
     */
    omit?: TeneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeneurInclude<ExtArgs> | null
    /**
     * Filter, which Teneur to fetch.
     */
    where: TeneurWhereUniqueInput
  }

  /**
   * Teneur findFirst
   */
  export type TeneurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teneur
     */
    select?: TeneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teneur
     */
    omit?: TeneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeneurInclude<ExtArgs> | null
    /**
     * Filter, which Teneur to fetch.
     */
    where?: TeneurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teneurs to fetch.
     */
    orderBy?: TeneurOrderByWithRelationInput | TeneurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teneurs.
     */
    cursor?: TeneurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teneurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teneurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teneurs.
     */
    distinct?: TeneurScalarFieldEnum | TeneurScalarFieldEnum[]
  }

  /**
   * Teneur findFirstOrThrow
   */
  export type TeneurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teneur
     */
    select?: TeneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teneur
     */
    omit?: TeneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeneurInclude<ExtArgs> | null
    /**
     * Filter, which Teneur to fetch.
     */
    where?: TeneurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teneurs to fetch.
     */
    orderBy?: TeneurOrderByWithRelationInput | TeneurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teneurs.
     */
    cursor?: TeneurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teneurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teneurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teneurs.
     */
    distinct?: TeneurScalarFieldEnum | TeneurScalarFieldEnum[]
  }

  /**
   * Teneur findMany
   */
  export type TeneurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teneur
     */
    select?: TeneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teneur
     */
    omit?: TeneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeneurInclude<ExtArgs> | null
    /**
     * Filter, which Teneurs to fetch.
     */
    where?: TeneurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teneurs to fetch.
     */
    orderBy?: TeneurOrderByWithRelationInput | TeneurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teneurs.
     */
    cursor?: TeneurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teneurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teneurs.
     */
    skip?: number
    distinct?: TeneurScalarFieldEnum | TeneurScalarFieldEnum[]
  }

  /**
   * Teneur create
   */
  export type TeneurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teneur
     */
    select?: TeneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teneur
     */
    omit?: TeneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeneurInclude<ExtArgs> | null
    /**
     * The data needed to create a Teneur.
     */
    data: XOR<TeneurCreateInput, TeneurUncheckedCreateInput>
  }

  /**
   * Teneur createMany
   */
  export type TeneurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teneurs.
     */
    data: TeneurCreateManyInput | TeneurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teneur createManyAndReturn
   */
  export type TeneurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teneur
     */
    select?: TeneurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teneur
     */
    omit?: TeneurOmit<ExtArgs> | null
    /**
     * The data used to create many Teneurs.
     */
    data: TeneurCreateManyInput | TeneurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teneur update
   */
  export type TeneurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teneur
     */
    select?: TeneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teneur
     */
    omit?: TeneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeneurInclude<ExtArgs> | null
    /**
     * The data needed to update a Teneur.
     */
    data: XOR<TeneurUpdateInput, TeneurUncheckedUpdateInput>
    /**
     * Choose, which Teneur to update.
     */
    where: TeneurWhereUniqueInput
  }

  /**
   * Teneur updateMany
   */
  export type TeneurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teneurs.
     */
    data: XOR<TeneurUpdateManyMutationInput, TeneurUncheckedUpdateManyInput>
    /**
     * Filter which Teneurs to update
     */
    where?: TeneurWhereInput
    /**
     * Limit how many Teneurs to update.
     */
    limit?: number
  }

  /**
   * Teneur updateManyAndReturn
   */
  export type TeneurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teneur
     */
    select?: TeneurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teneur
     */
    omit?: TeneurOmit<ExtArgs> | null
    /**
     * The data used to update Teneurs.
     */
    data: XOR<TeneurUpdateManyMutationInput, TeneurUncheckedUpdateManyInput>
    /**
     * Filter which Teneurs to update
     */
    where?: TeneurWhereInput
    /**
     * Limit how many Teneurs to update.
     */
    limit?: number
  }

  /**
   * Teneur upsert
   */
  export type TeneurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teneur
     */
    select?: TeneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teneur
     */
    omit?: TeneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeneurInclude<ExtArgs> | null
    /**
     * The filter to search for the Teneur to update in case it exists.
     */
    where: TeneurWhereUniqueInput
    /**
     * In case the Teneur found by the `where` argument doesn't exist, create a new Teneur with this data.
     */
    create: XOR<TeneurCreateInput, TeneurUncheckedCreateInput>
    /**
     * In case the Teneur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeneurUpdateInput, TeneurUncheckedUpdateInput>
  }

  /**
   * Teneur delete
   */
  export type TeneurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teneur
     */
    select?: TeneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teneur
     */
    omit?: TeneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeneurInclude<ExtArgs> | null
    /**
     * Filter which Teneur to delete.
     */
    where: TeneurWhereUniqueInput
  }

  /**
   * Teneur deleteMany
   */
  export type TeneurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teneurs to delete
     */
    where?: TeneurWhereInput
    /**
     * Limit how many Teneurs to delete.
     */
    limit?: number
  }

  /**
   * Teneur.Produit
   */
  export type Teneur$ProduitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    cursor?: ProduitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Teneur without action
   */
  export type TeneurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teneur
     */
    select?: TeneurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teneur
     */
    omit?: TeneurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeneurInclude<ExtArgs> | null
  }


  /**
   * Model Produit
   */

  export type AggregateProduit = {
    _count: ProduitCountAggregateOutputType | null
    _avg: ProduitAvgAggregateOutputType | null
    _sum: ProduitSumAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  export type ProduitAvgAggregateOutputType = {
    id: number | null
    prix: number | null
    qtte: number | null
    teneurId: number | null
  }

  export type ProduitSumAggregateOutputType = {
    id: number | null
    prix: number | null
    qtte: number | null
    teneurId: number | null
  }

  export type ProduitMinAggregateOutputType = {
    id: number | null
    designation: string | null
    prix: number | null
    qtte: number | null
    description: string | null
    teneurId: number | null
    utilisateurId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProduitMaxAggregateOutputType = {
    id: number | null
    designation: string | null
    prix: number | null
    qtte: number | null
    description: string | null
    teneurId: number | null
    utilisateurId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProduitCountAggregateOutputType = {
    id: number
    designation: number
    prix: number
    qtte: number
    description: number
    teneurId: number
    utilisateurId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProduitAvgAggregateInputType = {
    id?: true
    prix?: true
    qtte?: true
    teneurId?: true
  }

  export type ProduitSumAggregateInputType = {
    id?: true
    prix?: true
    qtte?: true
    teneurId?: true
  }

  export type ProduitMinAggregateInputType = {
    id?: true
    designation?: true
    prix?: true
    qtte?: true
    description?: true
    teneurId?: true
    utilisateurId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProduitMaxAggregateInputType = {
    id?: true
    designation?: true
    prix?: true
    qtte?: true
    description?: true
    teneurId?: true
    utilisateurId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProduitCountAggregateInputType = {
    id?: true
    designation?: true
    prix?: true
    qtte?: true
    description?: true
    teneurId?: true
    utilisateurId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProduitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produit to aggregate.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produits
    **/
    _count?: true | ProduitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduitMaxAggregateInputType
  }

  export type GetProduitAggregateType<T extends ProduitAggregateArgs> = {
        [P in keyof T & keyof AggregateProduit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduit[P]>
      : GetScalarType<T[P], AggregateProduit[P]>
  }




  export type ProduitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithAggregationInput | ProduitOrderByWithAggregationInput[]
    by: ProduitScalarFieldEnum[] | ProduitScalarFieldEnum
    having?: ProduitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduitCountAggregateInputType | true
    _avg?: ProduitAvgAggregateInputType
    _sum?: ProduitSumAggregateInputType
    _min?: ProduitMinAggregateInputType
    _max?: ProduitMaxAggregateInputType
  }

  export type ProduitGroupByOutputType = {
    id: number
    designation: string
    prix: number
    qtte: number | null
    description: string
    teneurId: number
    utilisateurId: string
    createdAt: Date
    updatedAt: Date
    _count: ProduitCountAggregateOutputType | null
    _avg: ProduitAvgAggregateOutputType | null
    _sum: ProduitSumAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  type GetProduitGroupByPayload<T extends ProduitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduitGroupByOutputType[P]>
            : GetScalarType<T[P], ProduitGroupByOutputType[P]>
        }
      >
    >


  export type ProduitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designation?: boolean
    prix?: boolean
    qtte?: boolean
    description?: boolean
    teneurId?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teneur?: boolean | TeneurDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    DetailVente?: boolean | Produit$DetailVenteArgs<ExtArgs>
    DetailAchat?: boolean | Produit$DetailAchatArgs<ExtArgs>
    _count?: boolean | ProduitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designation?: boolean
    prix?: boolean
    qtte?: boolean
    description?: boolean
    teneurId?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teneur?: boolean | TeneurDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    designation?: boolean
    prix?: boolean
    qtte?: boolean
    description?: boolean
    teneurId?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teneur?: boolean | TeneurDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectScalar = {
    id?: boolean
    designation?: boolean
    prix?: boolean
    qtte?: boolean
    description?: boolean
    teneurId?: boolean
    utilisateurId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProduitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "designation" | "prix" | "qtte" | "description" | "teneurId" | "utilisateurId" | "createdAt" | "updatedAt", ExtArgs["result"]["produit"]>
  export type ProduitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teneur?: boolean | TeneurDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    DetailVente?: boolean | Produit$DetailVenteArgs<ExtArgs>
    DetailAchat?: boolean | Produit$DetailAchatArgs<ExtArgs>
    _count?: boolean | ProduitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProduitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teneur?: boolean | TeneurDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type ProduitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teneur?: boolean | TeneurDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $ProduitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produit"
    objects: {
      teneur: Prisma.$TeneurPayload<ExtArgs>
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      DetailVente: Prisma.$DetailVentePayload<ExtArgs>[]
      DetailAchat: Prisma.$DetailAchatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      designation: string
      prix: number
      qtte: number | null
      description: string
      teneurId: number
      utilisateurId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["produit"]>
    composites: {}
  }

  type ProduitGetPayload<S extends boolean | null | undefined | ProduitDefaultArgs> = $Result.GetResult<Prisma.$ProduitPayload, S>

  type ProduitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProduitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProduitCountAggregateInputType | true
    }

  export interface ProduitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produit'], meta: { name: 'Produit' } }
    /**
     * Find zero or one Produit that matches the filter.
     * @param {ProduitFindUniqueArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProduitFindUniqueArgs>(args: SelectSubset<T, ProduitFindUniqueArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProduitFindUniqueOrThrowArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProduitFindUniqueOrThrowArgs>(args: SelectSubset<T, ProduitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindFirstArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProduitFindFirstArgs>(args?: SelectSubset<T, ProduitFindFirstArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindFirstOrThrowArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProduitFindFirstOrThrowArgs>(args?: SelectSubset<T, ProduitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produits
     * const produits = await prisma.produit.findMany()
     * 
     * // Get first 10 Produits
     * const produits = await prisma.produit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produitWithIdOnly = await prisma.produit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProduitFindManyArgs>(args?: SelectSubset<T, ProduitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produit.
     * @param {ProduitCreateArgs} args - Arguments to create a Produit.
     * @example
     * // Create one Produit
     * const Produit = await prisma.produit.create({
     *   data: {
     *     // ... data to create a Produit
     *   }
     * })
     * 
     */
    create<T extends ProduitCreateArgs>(args: SelectSubset<T, ProduitCreateArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produits.
     * @param {ProduitCreateManyArgs} args - Arguments to create many Produits.
     * @example
     * // Create many Produits
     * const produit = await prisma.produit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProduitCreateManyArgs>(args?: SelectSubset<T, ProduitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produits and returns the data saved in the database.
     * @param {ProduitCreateManyAndReturnArgs} args - Arguments to create many Produits.
     * @example
     * // Create many Produits
     * const produit = await prisma.produit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produits and only return the `id`
     * const produitWithIdOnly = await prisma.produit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProduitCreateManyAndReturnArgs>(args?: SelectSubset<T, ProduitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produit.
     * @param {ProduitDeleteArgs} args - Arguments to delete one Produit.
     * @example
     * // Delete one Produit
     * const Produit = await prisma.produit.delete({
     *   where: {
     *     // ... filter to delete one Produit
     *   }
     * })
     * 
     */
    delete<T extends ProduitDeleteArgs>(args: SelectSubset<T, ProduitDeleteArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produit.
     * @param {ProduitUpdateArgs} args - Arguments to update one Produit.
     * @example
     * // Update one Produit
     * const produit = await prisma.produit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProduitUpdateArgs>(args: SelectSubset<T, ProduitUpdateArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produits.
     * @param {ProduitDeleteManyArgs} args - Arguments to filter Produits to delete.
     * @example
     * // Delete a few Produits
     * const { count } = await prisma.produit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProduitDeleteManyArgs>(args?: SelectSubset<T, ProduitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produits
     * const produit = await prisma.produit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProduitUpdateManyArgs>(args: SelectSubset<T, ProduitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produits and returns the data updated in the database.
     * @param {ProduitUpdateManyAndReturnArgs} args - Arguments to update many Produits.
     * @example
     * // Update many Produits
     * const produit = await prisma.produit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produits and only return the `id`
     * const produitWithIdOnly = await prisma.produit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProduitUpdateManyAndReturnArgs>(args: SelectSubset<T, ProduitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produit.
     * @param {ProduitUpsertArgs} args - Arguments to update or create a Produit.
     * @example
     * // Update or create a Produit
     * const produit = await prisma.produit.upsert({
     *   create: {
     *     // ... data to create a Produit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produit we want to update
     *   }
     * })
     */
    upsert<T extends ProduitUpsertArgs>(args: SelectSubset<T, ProduitUpsertArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitCountArgs} args - Arguments to filter Produits to count.
     * @example
     * // Count the number of Produits
     * const count = await prisma.produit.count({
     *   where: {
     *     // ... the filter for the Produits we want to count
     *   }
     * })
    **/
    count<T extends ProduitCountArgs>(
      args?: Subset<T, ProduitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProduitAggregateArgs>(args: Subset<T, ProduitAggregateArgs>): Prisma.PrismaPromise<GetProduitAggregateType<T>>

    /**
     * Group by Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProduitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduitGroupByArgs['orderBy'] }
        : { orderBy?: ProduitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProduitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produit model
   */
  readonly fields: ProduitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProduitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teneur<T extends TeneurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeneurDefaultArgs<ExtArgs>>): Prisma__TeneurClient<$Result.GetResult<Prisma.$TeneurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    DetailVente<T extends Produit$DetailVenteArgs<ExtArgs> = {}>(args?: Subset<T, Produit$DetailVenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    DetailAchat<T extends Produit$DetailAchatArgs<ExtArgs> = {}>(args?: Subset<T, Produit$DetailAchatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Produit model
   */
  interface ProduitFieldRefs {
    readonly id: FieldRef<"Produit", 'Int'>
    readonly designation: FieldRef<"Produit", 'String'>
    readonly prix: FieldRef<"Produit", 'Float'>
    readonly qtte: FieldRef<"Produit", 'Int'>
    readonly description: FieldRef<"Produit", 'String'>
    readonly teneurId: FieldRef<"Produit", 'Int'>
    readonly utilisateurId: FieldRef<"Produit", 'String'>
    readonly createdAt: FieldRef<"Produit", 'DateTime'>
    readonly updatedAt: FieldRef<"Produit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produit findUnique
   */
  export type ProduitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit findUniqueOrThrow
   */
  export type ProduitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit findFirst
   */
  export type ProduitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit findFirstOrThrow
   */
  export type ProduitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit findMany
   */
  export type ProduitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produits to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit create
   */
  export type ProduitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The data needed to create a Produit.
     */
    data: XOR<ProduitCreateInput, ProduitUncheckedCreateInput>
  }

  /**
   * Produit createMany
   */
  export type ProduitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produits.
     */
    data: ProduitCreateManyInput | ProduitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produit createManyAndReturn
   */
  export type ProduitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * The data used to create many Produits.
     */
    data: ProduitCreateManyInput | ProduitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produit update
   */
  export type ProduitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The data needed to update a Produit.
     */
    data: XOR<ProduitUpdateInput, ProduitUncheckedUpdateInput>
    /**
     * Choose, which Produit to update.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit updateMany
   */
  export type ProduitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produits.
     */
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyInput>
    /**
     * Filter which Produits to update
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to update.
     */
    limit?: number
  }

  /**
   * Produit updateManyAndReturn
   */
  export type ProduitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * The data used to update Produits.
     */
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyInput>
    /**
     * Filter which Produits to update
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produit upsert
   */
  export type ProduitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The filter to search for the Produit to update in case it exists.
     */
    where: ProduitWhereUniqueInput
    /**
     * In case the Produit found by the `where` argument doesn't exist, create a new Produit with this data.
     */
    create: XOR<ProduitCreateInput, ProduitUncheckedCreateInput>
    /**
     * In case the Produit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProduitUpdateInput, ProduitUncheckedUpdateInput>
  }

  /**
   * Produit delete
   */
  export type ProduitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter which Produit to delete.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit deleteMany
   */
  export type ProduitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produits to delete
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to delete.
     */
    limit?: number
  }

  /**
   * Produit.DetailVente
   */
  export type Produit$DetailVenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteInclude<ExtArgs> | null
    where?: DetailVenteWhereInput
    orderBy?: DetailVenteOrderByWithRelationInput | DetailVenteOrderByWithRelationInput[]
    cursor?: DetailVenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailVenteScalarFieldEnum | DetailVenteScalarFieldEnum[]
  }

  /**
   * Produit.DetailAchat
   */
  export type Produit$DetailAchatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatInclude<ExtArgs> | null
    where?: DetailAchatWhereInput
    orderBy?: DetailAchatOrderByWithRelationInput | DetailAchatOrderByWithRelationInput[]
    cursor?: DetailAchatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailAchatScalarFieldEnum | DetailAchatScalarFieldEnum[]
  }

  /**
   * Produit without action
   */
  export type ProduitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
  }


  /**
   * Model DetailVente
   */

  export type AggregateDetailVente = {
    _count: DetailVenteCountAggregateOutputType | null
    _avg: DetailVenteAvgAggregateOutputType | null
    _sum: DetailVenteSumAggregateOutputType | null
    _min: DetailVenteMinAggregateOutputType | null
    _max: DetailVenteMaxAggregateOutputType | null
  }

  export type DetailVenteAvgAggregateOutputType = {
    id: number | null
    produitId: number | null
    qtte: number | null
    prixUnitaire: number | null
    prixTotal: number | null
  }

  export type DetailVenteSumAggregateOutputType = {
    id: number | null
    produitId: number | null
    qtte: number | null
    prixUnitaire: number | null
    prixTotal: number | null
  }

  export type DetailVenteMinAggregateOutputType = {
    id: number | null
    produitId: number | null
    qtte: number | null
    prixUnitaire: number | null
    prixTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DetailVenteMaxAggregateOutputType = {
    id: number | null
    produitId: number | null
    qtte: number | null
    prixUnitaire: number | null
    prixTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DetailVenteCountAggregateOutputType = {
    id: number
    produitId: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DetailVenteAvgAggregateInputType = {
    id?: true
    produitId?: true
    qtte?: true
    prixUnitaire?: true
    prixTotal?: true
  }

  export type DetailVenteSumAggregateInputType = {
    id?: true
    produitId?: true
    qtte?: true
    prixUnitaire?: true
    prixTotal?: true
  }

  export type DetailVenteMinAggregateInputType = {
    id?: true
    produitId?: true
    qtte?: true
    prixUnitaire?: true
    prixTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DetailVenteMaxAggregateInputType = {
    id?: true
    produitId?: true
    qtte?: true
    prixUnitaire?: true
    prixTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DetailVenteCountAggregateInputType = {
    id?: true
    produitId?: true
    qtte?: true
    prixUnitaire?: true
    prixTotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DetailVenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailVente to aggregate.
     */
    where?: DetailVenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailVentes to fetch.
     */
    orderBy?: DetailVenteOrderByWithRelationInput | DetailVenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailVenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailVentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailVentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailVentes
    **/
    _count?: true | DetailVenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailVenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailVenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailVenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailVenteMaxAggregateInputType
  }

  export type GetDetailVenteAggregateType<T extends DetailVenteAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailVente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailVente[P]>
      : GetScalarType<T[P], AggregateDetailVente[P]>
  }




  export type DetailVenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailVenteWhereInput
    orderBy?: DetailVenteOrderByWithAggregationInput | DetailVenteOrderByWithAggregationInput[]
    by: DetailVenteScalarFieldEnum[] | DetailVenteScalarFieldEnum
    having?: DetailVenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailVenteCountAggregateInputType | true
    _avg?: DetailVenteAvgAggregateInputType
    _sum?: DetailVenteSumAggregateInputType
    _min?: DetailVenteMinAggregateInputType
    _max?: DetailVenteMaxAggregateInputType
  }

  export type DetailVenteGroupByOutputType = {
    id: number
    produitId: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt: Date
    updatedAt: Date
    _count: DetailVenteCountAggregateOutputType | null
    _avg: DetailVenteAvgAggregateOutputType | null
    _sum: DetailVenteSumAggregateOutputType | null
    _min: DetailVenteMinAggregateOutputType | null
    _max: DetailVenteMaxAggregateOutputType | null
  }

  type GetDetailVenteGroupByPayload<T extends DetailVenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailVenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailVenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailVenteGroupByOutputType[P]>
            : GetScalarType<T[P], DetailVenteGroupByOutputType[P]>
        }
      >
    >


  export type DetailVenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produitId?: boolean
    qtte?: boolean
    prixUnitaire?: boolean
    prixTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
    Vente?: boolean | DetailVente$VenteArgs<ExtArgs>
    _count?: boolean | DetailVenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailVente"]>

  export type DetailVenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produitId?: boolean
    qtte?: boolean
    prixUnitaire?: boolean
    prixTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailVente"]>

  export type DetailVenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produitId?: boolean
    qtte?: boolean
    prixUnitaire?: boolean
    prixTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailVente"]>

  export type DetailVenteSelectScalar = {
    id?: boolean
    produitId?: boolean
    qtte?: boolean
    prixUnitaire?: boolean
    prixTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DetailVenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produitId" | "qtte" | "prixUnitaire" | "prixTotal" | "createdAt" | "updatedAt", ExtArgs["result"]["detailVente"]>
  export type DetailVenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
    Vente?: boolean | DetailVente$VenteArgs<ExtArgs>
    _count?: boolean | DetailVenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DetailVenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }
  export type DetailVenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }

  export type $DetailVentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailVente"
    objects: {
      produit: Prisma.$ProduitPayload<ExtArgs>
      Vente: Prisma.$VentePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produitId: number
      qtte: number
      prixUnitaire: number
      prixTotal: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["detailVente"]>
    composites: {}
  }

  type DetailVenteGetPayload<S extends boolean | null | undefined | DetailVenteDefaultArgs> = $Result.GetResult<Prisma.$DetailVentePayload, S>

  type DetailVenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailVenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailVenteCountAggregateInputType | true
    }

  export interface DetailVenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailVente'], meta: { name: 'DetailVente' } }
    /**
     * Find zero or one DetailVente that matches the filter.
     * @param {DetailVenteFindUniqueArgs} args - Arguments to find a DetailVente
     * @example
     * // Get one DetailVente
     * const detailVente = await prisma.detailVente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailVenteFindUniqueArgs>(args: SelectSubset<T, DetailVenteFindUniqueArgs<ExtArgs>>): Prisma__DetailVenteClient<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailVente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailVenteFindUniqueOrThrowArgs} args - Arguments to find a DetailVente
     * @example
     * // Get one DetailVente
     * const detailVente = await prisma.detailVente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailVenteFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailVenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailVenteClient<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailVente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailVenteFindFirstArgs} args - Arguments to find a DetailVente
     * @example
     * // Get one DetailVente
     * const detailVente = await prisma.detailVente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailVenteFindFirstArgs>(args?: SelectSubset<T, DetailVenteFindFirstArgs<ExtArgs>>): Prisma__DetailVenteClient<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailVente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailVenteFindFirstOrThrowArgs} args - Arguments to find a DetailVente
     * @example
     * // Get one DetailVente
     * const detailVente = await prisma.detailVente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailVenteFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailVenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailVenteClient<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailVentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailVenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailVentes
     * const detailVentes = await prisma.detailVente.findMany()
     * 
     * // Get first 10 DetailVentes
     * const detailVentes = await prisma.detailVente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailVenteWithIdOnly = await prisma.detailVente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailVenteFindManyArgs>(args?: SelectSubset<T, DetailVenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailVente.
     * @param {DetailVenteCreateArgs} args - Arguments to create a DetailVente.
     * @example
     * // Create one DetailVente
     * const DetailVente = await prisma.detailVente.create({
     *   data: {
     *     // ... data to create a DetailVente
     *   }
     * })
     * 
     */
    create<T extends DetailVenteCreateArgs>(args: SelectSubset<T, DetailVenteCreateArgs<ExtArgs>>): Prisma__DetailVenteClient<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailVentes.
     * @param {DetailVenteCreateManyArgs} args - Arguments to create many DetailVentes.
     * @example
     * // Create many DetailVentes
     * const detailVente = await prisma.detailVente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailVenteCreateManyArgs>(args?: SelectSubset<T, DetailVenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetailVentes and returns the data saved in the database.
     * @param {DetailVenteCreateManyAndReturnArgs} args - Arguments to create many DetailVentes.
     * @example
     * // Create many DetailVentes
     * const detailVente = await prisma.detailVente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetailVentes and only return the `id`
     * const detailVenteWithIdOnly = await prisma.detailVente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetailVenteCreateManyAndReturnArgs>(args?: SelectSubset<T, DetailVenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetailVente.
     * @param {DetailVenteDeleteArgs} args - Arguments to delete one DetailVente.
     * @example
     * // Delete one DetailVente
     * const DetailVente = await prisma.detailVente.delete({
     *   where: {
     *     // ... filter to delete one DetailVente
     *   }
     * })
     * 
     */
    delete<T extends DetailVenteDeleteArgs>(args: SelectSubset<T, DetailVenteDeleteArgs<ExtArgs>>): Prisma__DetailVenteClient<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailVente.
     * @param {DetailVenteUpdateArgs} args - Arguments to update one DetailVente.
     * @example
     * // Update one DetailVente
     * const detailVente = await prisma.detailVente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailVenteUpdateArgs>(args: SelectSubset<T, DetailVenteUpdateArgs<ExtArgs>>): Prisma__DetailVenteClient<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailVentes.
     * @param {DetailVenteDeleteManyArgs} args - Arguments to filter DetailVentes to delete.
     * @example
     * // Delete a few DetailVentes
     * const { count } = await prisma.detailVente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailVenteDeleteManyArgs>(args?: SelectSubset<T, DetailVenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailVentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailVenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailVentes
     * const detailVente = await prisma.detailVente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailVenteUpdateManyArgs>(args: SelectSubset<T, DetailVenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailVentes and returns the data updated in the database.
     * @param {DetailVenteUpdateManyAndReturnArgs} args - Arguments to update many DetailVentes.
     * @example
     * // Update many DetailVentes
     * const detailVente = await prisma.detailVente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetailVentes and only return the `id`
     * const detailVenteWithIdOnly = await prisma.detailVente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetailVenteUpdateManyAndReturnArgs>(args: SelectSubset<T, DetailVenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetailVente.
     * @param {DetailVenteUpsertArgs} args - Arguments to update or create a DetailVente.
     * @example
     * // Update or create a DetailVente
     * const detailVente = await prisma.detailVente.upsert({
     *   create: {
     *     // ... data to create a DetailVente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailVente we want to update
     *   }
     * })
     */
    upsert<T extends DetailVenteUpsertArgs>(args: SelectSubset<T, DetailVenteUpsertArgs<ExtArgs>>): Prisma__DetailVenteClient<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailVentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailVenteCountArgs} args - Arguments to filter DetailVentes to count.
     * @example
     * // Count the number of DetailVentes
     * const count = await prisma.detailVente.count({
     *   where: {
     *     // ... the filter for the DetailVentes we want to count
     *   }
     * })
    **/
    count<T extends DetailVenteCountArgs>(
      args?: Subset<T, DetailVenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailVenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailVente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailVenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetailVenteAggregateArgs>(args: Subset<T, DetailVenteAggregateArgs>): Prisma.PrismaPromise<GetDetailVenteAggregateType<T>>

    /**
     * Group by DetailVente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailVenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetailVenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailVenteGroupByArgs['orderBy'] }
        : { orderBy?: DetailVenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetailVenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailVenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailVente model
   */
  readonly fields: DetailVenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailVente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailVenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produit<T extends ProduitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProduitDefaultArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Vente<T extends DetailVente$VenteArgs<ExtArgs> = {}>(args?: Subset<T, DetailVente$VenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetailVente model
   */
  interface DetailVenteFieldRefs {
    readonly id: FieldRef<"DetailVente", 'Int'>
    readonly produitId: FieldRef<"DetailVente", 'Int'>
    readonly qtte: FieldRef<"DetailVente", 'Int'>
    readonly prixUnitaire: FieldRef<"DetailVente", 'Float'>
    readonly prixTotal: FieldRef<"DetailVente", 'Float'>
    readonly createdAt: FieldRef<"DetailVente", 'DateTime'>
    readonly updatedAt: FieldRef<"DetailVente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DetailVente findUnique
   */
  export type DetailVenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteInclude<ExtArgs> | null
    /**
     * Filter, which DetailVente to fetch.
     */
    where: DetailVenteWhereUniqueInput
  }

  /**
   * DetailVente findUniqueOrThrow
   */
  export type DetailVenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteInclude<ExtArgs> | null
    /**
     * Filter, which DetailVente to fetch.
     */
    where: DetailVenteWhereUniqueInput
  }

  /**
   * DetailVente findFirst
   */
  export type DetailVenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteInclude<ExtArgs> | null
    /**
     * Filter, which DetailVente to fetch.
     */
    where?: DetailVenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailVentes to fetch.
     */
    orderBy?: DetailVenteOrderByWithRelationInput | DetailVenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailVentes.
     */
    cursor?: DetailVenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailVentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailVentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailVentes.
     */
    distinct?: DetailVenteScalarFieldEnum | DetailVenteScalarFieldEnum[]
  }

  /**
   * DetailVente findFirstOrThrow
   */
  export type DetailVenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteInclude<ExtArgs> | null
    /**
     * Filter, which DetailVente to fetch.
     */
    where?: DetailVenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailVentes to fetch.
     */
    orderBy?: DetailVenteOrderByWithRelationInput | DetailVenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailVentes.
     */
    cursor?: DetailVenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailVentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailVentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailVentes.
     */
    distinct?: DetailVenteScalarFieldEnum | DetailVenteScalarFieldEnum[]
  }

  /**
   * DetailVente findMany
   */
  export type DetailVenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteInclude<ExtArgs> | null
    /**
     * Filter, which DetailVentes to fetch.
     */
    where?: DetailVenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailVentes to fetch.
     */
    orderBy?: DetailVenteOrderByWithRelationInput | DetailVenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailVentes.
     */
    cursor?: DetailVenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailVentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailVentes.
     */
    skip?: number
    distinct?: DetailVenteScalarFieldEnum | DetailVenteScalarFieldEnum[]
  }

  /**
   * DetailVente create
   */
  export type DetailVenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailVente.
     */
    data: XOR<DetailVenteCreateInput, DetailVenteUncheckedCreateInput>
  }

  /**
   * DetailVente createMany
   */
  export type DetailVenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailVentes.
     */
    data: DetailVenteCreateManyInput | DetailVenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailVente createManyAndReturn
   */
  export type DetailVenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * The data used to create many DetailVentes.
     */
    data: DetailVenteCreateManyInput | DetailVenteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailVente update
   */
  export type DetailVenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailVente.
     */
    data: XOR<DetailVenteUpdateInput, DetailVenteUncheckedUpdateInput>
    /**
     * Choose, which DetailVente to update.
     */
    where: DetailVenteWhereUniqueInput
  }

  /**
   * DetailVente updateMany
   */
  export type DetailVenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailVentes.
     */
    data: XOR<DetailVenteUpdateManyMutationInput, DetailVenteUncheckedUpdateManyInput>
    /**
     * Filter which DetailVentes to update
     */
    where?: DetailVenteWhereInput
    /**
     * Limit how many DetailVentes to update.
     */
    limit?: number
  }

  /**
   * DetailVente updateManyAndReturn
   */
  export type DetailVenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * The data used to update DetailVentes.
     */
    data: XOR<DetailVenteUpdateManyMutationInput, DetailVenteUncheckedUpdateManyInput>
    /**
     * Filter which DetailVentes to update
     */
    where?: DetailVenteWhereInput
    /**
     * Limit how many DetailVentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailVente upsert
   */
  export type DetailVenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailVente to update in case it exists.
     */
    where: DetailVenteWhereUniqueInput
    /**
     * In case the DetailVente found by the `where` argument doesn't exist, create a new DetailVente with this data.
     */
    create: XOR<DetailVenteCreateInput, DetailVenteUncheckedCreateInput>
    /**
     * In case the DetailVente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailVenteUpdateInput, DetailVenteUncheckedUpdateInput>
  }

  /**
   * DetailVente delete
   */
  export type DetailVenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteInclude<ExtArgs> | null
    /**
     * Filter which DetailVente to delete.
     */
    where: DetailVenteWhereUniqueInput
  }

  /**
   * DetailVente deleteMany
   */
  export type DetailVenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailVentes to delete
     */
    where?: DetailVenteWhereInput
    /**
     * Limit how many DetailVentes to delete.
     */
    limit?: number
  }

  /**
   * DetailVente.Vente
   */
  export type DetailVente$VenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    where?: VenteWhereInput
    orderBy?: VenteOrderByWithRelationInput | VenteOrderByWithRelationInput[]
    cursor?: VenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenteScalarFieldEnum | VenteScalarFieldEnum[]
  }

  /**
   * DetailVente without action
   */
  export type DetailVenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailVente
     */
    select?: DetailVenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailVente
     */
    omit?: DetailVenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailVenteInclude<ExtArgs> | null
  }


  /**
   * Model Paiement
   */

  export type AggregatePaiement = {
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  export type PaiementAvgAggregateOutputType = {
    id: number | null
    montant: number | null
  }

  export type PaiementSumAggregateOutputType = {
    id: number | null
    montant: number | null
  }

  export type PaiementMinAggregateOutputType = {
    id: number | null
    montant: number | null
    moyen_paiement: $Enums.MoyenPaiment | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaiementMaxAggregateOutputType = {
    id: number | null
    montant: number | null
    moyen_paiement: $Enums.MoyenPaiment | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaiementCountAggregateOutputType = {
    id: number
    montant: number
    moyen_paiement: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaiementAvgAggregateInputType = {
    id?: true
    montant?: true
  }

  export type PaiementSumAggregateInputType = {
    id?: true
    montant?: true
  }

  export type PaiementMinAggregateInputType = {
    id?: true
    montant?: true
    moyen_paiement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaiementMaxAggregateInputType = {
    id?: true
    montant?: true
    moyen_paiement?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaiementCountAggregateInputType = {
    id?: true
    montant?: true
    moyen_paiement?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaiementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiement to aggregate.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paiements
    **/
    _count?: true | PaiementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaiementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaiementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaiementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaiementMaxAggregateInputType
  }

  export type GetPaiementAggregateType<T extends PaiementAggregateArgs> = {
        [P in keyof T & keyof AggregatePaiement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaiement[P]>
      : GetScalarType<T[P], AggregatePaiement[P]>
  }




  export type PaiementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithAggregationInput | PaiementOrderByWithAggregationInput[]
    by: PaiementScalarFieldEnum[] | PaiementScalarFieldEnum
    having?: PaiementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaiementCountAggregateInputType | true
    _avg?: PaiementAvgAggregateInputType
    _sum?: PaiementSumAggregateInputType
    _min?: PaiementMinAggregateInputType
    _max?: PaiementMaxAggregateInputType
  }

  export type PaiementGroupByOutputType = {
    id: number
    montant: number
    moyen_paiement: $Enums.MoyenPaiment
    createdAt: Date
    updatedAt: Date
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  type GetPaiementGroupByPayload<T extends PaiementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaiementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaiementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaiementGroupByOutputType[P]>
            : GetScalarType<T[P], PaiementGroupByOutputType[P]>
        }
      >
    >


  export type PaiementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    moyen_paiement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Vente?: boolean | Paiement$VenteArgs<ExtArgs>
    Achat?: boolean | Paiement$AchatArgs<ExtArgs>
    _count?: boolean | PaiementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    moyen_paiement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    moyen_paiement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectScalar = {
    id?: boolean
    montant?: boolean
    moyen_paiement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaiementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "montant" | "moyen_paiement" | "createdAt" | "updatedAt", ExtArgs["result"]["paiement"]>
  export type PaiementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vente?: boolean | Paiement$VenteArgs<ExtArgs>
    Achat?: boolean | Paiement$AchatArgs<ExtArgs>
    _count?: boolean | PaiementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaiementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PaiementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaiementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paiement"
    objects: {
      Vente: Prisma.$VentePayload<ExtArgs>[]
      Achat: Prisma.$AchatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      montant: number
      moyen_paiement: $Enums.MoyenPaiment
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paiement"]>
    composites: {}
  }

  type PaiementGetPayload<S extends boolean | null | undefined | PaiementDefaultArgs> = $Result.GetResult<Prisma.$PaiementPayload, S>

  type PaiementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaiementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaiementCountAggregateInputType | true
    }

  export interface PaiementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paiement'], meta: { name: 'Paiement' } }
    /**
     * Find zero or one Paiement that matches the filter.
     * @param {PaiementFindUniqueArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaiementFindUniqueArgs>(args: SelectSubset<T, PaiementFindUniqueArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paiement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaiementFindUniqueOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaiementFindUniqueOrThrowArgs>(args: SelectSubset<T, PaiementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaiementFindFirstArgs>(args?: SelectSubset<T, PaiementFindFirstArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaiementFindFirstOrThrowArgs>(args?: SelectSubset<T, PaiementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paiements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paiements
     * const paiements = await prisma.paiement.findMany()
     * 
     * // Get first 10 Paiements
     * const paiements = await prisma.paiement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paiementWithIdOnly = await prisma.paiement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaiementFindManyArgs>(args?: SelectSubset<T, PaiementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paiement.
     * @param {PaiementCreateArgs} args - Arguments to create a Paiement.
     * @example
     * // Create one Paiement
     * const Paiement = await prisma.paiement.create({
     *   data: {
     *     // ... data to create a Paiement
     *   }
     * })
     * 
     */
    create<T extends PaiementCreateArgs>(args: SelectSubset<T, PaiementCreateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paiements.
     * @param {PaiementCreateManyArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaiementCreateManyArgs>(args?: SelectSubset<T, PaiementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paiements and returns the data saved in the database.
     * @param {PaiementCreateManyAndReturnArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paiements and only return the `id`
     * const paiementWithIdOnly = await prisma.paiement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaiementCreateManyAndReturnArgs>(args?: SelectSubset<T, PaiementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paiement.
     * @param {PaiementDeleteArgs} args - Arguments to delete one Paiement.
     * @example
     * // Delete one Paiement
     * const Paiement = await prisma.paiement.delete({
     *   where: {
     *     // ... filter to delete one Paiement
     *   }
     * })
     * 
     */
    delete<T extends PaiementDeleteArgs>(args: SelectSubset<T, PaiementDeleteArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paiement.
     * @param {PaiementUpdateArgs} args - Arguments to update one Paiement.
     * @example
     * // Update one Paiement
     * const paiement = await prisma.paiement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaiementUpdateArgs>(args: SelectSubset<T, PaiementUpdateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paiements.
     * @param {PaiementDeleteManyArgs} args - Arguments to filter Paiements to delete.
     * @example
     * // Delete a few Paiements
     * const { count } = await prisma.paiement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaiementDeleteManyArgs>(args?: SelectSubset<T, PaiementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaiementUpdateManyArgs>(args: SelectSubset<T, PaiementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements and returns the data updated in the database.
     * @param {PaiementUpdateManyAndReturnArgs} args - Arguments to update many Paiements.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paiements and only return the `id`
     * const paiementWithIdOnly = await prisma.paiement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaiementUpdateManyAndReturnArgs>(args: SelectSubset<T, PaiementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paiement.
     * @param {PaiementUpsertArgs} args - Arguments to update or create a Paiement.
     * @example
     * // Update or create a Paiement
     * const paiement = await prisma.paiement.upsert({
     *   create: {
     *     // ... data to create a Paiement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paiement we want to update
     *   }
     * })
     */
    upsert<T extends PaiementUpsertArgs>(args: SelectSubset<T, PaiementUpsertArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementCountArgs} args - Arguments to filter Paiements to count.
     * @example
     * // Count the number of Paiements
     * const count = await prisma.paiement.count({
     *   where: {
     *     // ... the filter for the Paiements we want to count
     *   }
     * })
    **/
    count<T extends PaiementCountArgs>(
      args?: Subset<T, PaiementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaiementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaiementAggregateArgs>(args: Subset<T, PaiementAggregateArgs>): Prisma.PrismaPromise<GetPaiementAggregateType<T>>

    /**
     * Group by Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaiementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaiementGroupByArgs['orderBy'] }
        : { orderBy?: PaiementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paiement model
   */
  readonly fields: PaiementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paiement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaiementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Vente<T extends Paiement$VenteArgs<ExtArgs> = {}>(args?: Subset<T, Paiement$VenteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Achat<T extends Paiement$AchatArgs<ExtArgs> = {}>(args?: Subset<T, Paiement$AchatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paiement model
   */
  interface PaiementFieldRefs {
    readonly id: FieldRef<"Paiement", 'Int'>
    readonly montant: FieldRef<"Paiement", 'Float'>
    readonly moyen_paiement: FieldRef<"Paiement", 'MoyenPaiment'>
    readonly createdAt: FieldRef<"Paiement", 'DateTime'>
    readonly updatedAt: FieldRef<"Paiement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paiement findUnique
   */
  export type PaiementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findUniqueOrThrow
   */
  export type PaiementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findFirst
   */
  export type PaiementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findFirstOrThrow
   */
  export type PaiementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findMany
   */
  export type PaiementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiements to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement create
   */
  export type PaiementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to create a Paiement.
     */
    data: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
  }

  /**
   * Paiement createMany
   */
  export type PaiementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paiement createManyAndReturn
   */
  export type PaiementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paiement update
   */
  export type PaiementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to update a Paiement.
     */
    data: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
    /**
     * Choose, which Paiement to update.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement updateMany
   */
  export type PaiementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
  }

  /**
   * Paiement updateManyAndReturn
   */
  export type PaiementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
  }

  /**
   * Paiement upsert
   */
  export type PaiementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The filter to search for the Paiement to update in case it exists.
     */
    where: PaiementWhereUniqueInput
    /**
     * In case the Paiement found by the `where` argument doesn't exist, create a new Paiement with this data.
     */
    create: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
    /**
     * In case the Paiement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
  }

  /**
   * Paiement delete
   */
  export type PaiementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter which Paiement to delete.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement deleteMany
   */
  export type PaiementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiements to delete
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to delete.
     */
    limit?: number
  }

  /**
   * Paiement.Vente
   */
  export type Paiement$VenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    where?: VenteWhereInput
    orderBy?: VenteOrderByWithRelationInput | VenteOrderByWithRelationInput[]
    cursor?: VenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenteScalarFieldEnum | VenteScalarFieldEnum[]
  }

  /**
   * Paiement.Achat
   */
  export type Paiement$AchatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    where?: AchatWhereInput
    orderBy?: AchatOrderByWithRelationInput | AchatOrderByWithRelationInput[]
    cursor?: AchatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchatScalarFieldEnum | AchatScalarFieldEnum[]
  }

  /**
   * Paiement without action
   */
  export type PaiementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
  }


  /**
   * Model Vente
   */

  export type AggregateVente = {
    _count: VenteCountAggregateOutputType | null
    _avg: VenteAvgAggregateOutputType | null
    _sum: VenteSumAggregateOutputType | null
    _min: VenteMinAggregateOutputType | null
    _max: VenteMaxAggregateOutputType | null
  }

  export type VenteAvgAggregateOutputType = {
    id: number | null
    total_ttc: number | null
    total_ht: number | null
    remise: number | null
    detailVenteId: number | null
    paiementId: number | null
    entrepriseId: number | null
    fournisseurId: number | null
  }

  export type VenteSumAggregateOutputType = {
    id: number | null
    total_ttc: number | null
    total_ht: number | null
    remise: number | null
    detailVenteId: number | null
    paiementId: number | null
    entrepriseId: number | null
    fournisseurId: number | null
  }

  export type VenteMinAggregateOutputType = {
    id: number | null
    statut: string | null
    total_ttc: number | null
    total_ht: number | null
    remise: number | null
    detailVenteId: number | null
    paiementId: number | null
    entrepriseId: number | null
    clientId: string | null
    agentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fournisseurId: number | null
  }

  export type VenteMaxAggregateOutputType = {
    id: number | null
    statut: string | null
    total_ttc: number | null
    total_ht: number | null
    remise: number | null
    detailVenteId: number | null
    paiementId: number | null
    entrepriseId: number | null
    clientId: string | null
    agentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fournisseurId: number | null
  }

  export type VenteCountAggregateOutputType = {
    id: number
    statut: number
    total_ttc: number
    total_ht: number
    remise: number
    detailVenteId: number
    paiementId: number
    entrepriseId: number
    clientId: number
    agentId: number
    createdAt: number
    updatedAt: number
    fournisseurId: number
    _all: number
  }


  export type VenteAvgAggregateInputType = {
    id?: true
    total_ttc?: true
    total_ht?: true
    remise?: true
    detailVenteId?: true
    paiementId?: true
    entrepriseId?: true
    fournisseurId?: true
  }

  export type VenteSumAggregateInputType = {
    id?: true
    total_ttc?: true
    total_ht?: true
    remise?: true
    detailVenteId?: true
    paiementId?: true
    entrepriseId?: true
    fournisseurId?: true
  }

  export type VenteMinAggregateInputType = {
    id?: true
    statut?: true
    total_ttc?: true
    total_ht?: true
    remise?: true
    detailVenteId?: true
    paiementId?: true
    entrepriseId?: true
    clientId?: true
    agentId?: true
    createdAt?: true
    updatedAt?: true
    fournisseurId?: true
  }

  export type VenteMaxAggregateInputType = {
    id?: true
    statut?: true
    total_ttc?: true
    total_ht?: true
    remise?: true
    detailVenteId?: true
    paiementId?: true
    entrepriseId?: true
    clientId?: true
    agentId?: true
    createdAt?: true
    updatedAt?: true
    fournisseurId?: true
  }

  export type VenteCountAggregateInputType = {
    id?: true
    statut?: true
    total_ttc?: true
    total_ht?: true
    remise?: true
    detailVenteId?: true
    paiementId?: true
    entrepriseId?: true
    clientId?: true
    agentId?: true
    createdAt?: true
    updatedAt?: true
    fournisseurId?: true
    _all?: true
  }

  export type VenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vente to aggregate.
     */
    where?: VenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventes to fetch.
     */
    orderBy?: VenteOrderByWithRelationInput | VenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ventes
    **/
    _count?: true | VenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenteMaxAggregateInputType
  }

  export type GetVenteAggregateType<T extends VenteAggregateArgs> = {
        [P in keyof T & keyof AggregateVente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVente[P]>
      : GetScalarType<T[P], AggregateVente[P]>
  }




  export type VenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenteWhereInput
    orderBy?: VenteOrderByWithAggregationInput | VenteOrderByWithAggregationInput[]
    by: VenteScalarFieldEnum[] | VenteScalarFieldEnum
    having?: VenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenteCountAggregateInputType | true
    _avg?: VenteAvgAggregateInputType
    _sum?: VenteSumAggregateInputType
    _min?: VenteMinAggregateInputType
    _max?: VenteMaxAggregateInputType
  }

  export type VenteGroupByOutputType = {
    id: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    detailVenteId: number
    paiementId: number
    entrepriseId: number
    clientId: string
    agentId: string
    createdAt: Date
    updatedAt: Date
    fournisseurId: number | null
    _count: VenteCountAggregateOutputType | null
    _avg: VenteAvgAggregateOutputType | null
    _sum: VenteSumAggregateOutputType | null
    _min: VenteMinAggregateOutputType | null
    _max: VenteMaxAggregateOutputType | null
  }

  type GetVenteGroupByPayload<T extends VenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenteGroupByOutputType[P]>
            : GetScalarType<T[P], VenteGroupByOutputType[P]>
        }
      >
    >


  export type VenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statut?: boolean
    total_ttc?: boolean
    total_ht?: boolean
    remise?: boolean
    detailVenteId?: boolean
    paiementId?: boolean
    entrepriseId?: boolean
    clientId?: boolean
    agentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fournisseurId?: boolean
    detailvente?: boolean | DetailVenteDefaultArgs<ExtArgs>
    peiement?: boolean | PaiementDefaultArgs<ExtArgs>
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Fournisseur?: boolean | Vente$FournisseurArgs<ExtArgs>
  }, ExtArgs["result"]["vente"]>

  export type VenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statut?: boolean
    total_ttc?: boolean
    total_ht?: boolean
    remise?: boolean
    detailVenteId?: boolean
    paiementId?: boolean
    entrepriseId?: boolean
    clientId?: boolean
    agentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fournisseurId?: boolean
    detailvente?: boolean | DetailVenteDefaultArgs<ExtArgs>
    peiement?: boolean | PaiementDefaultArgs<ExtArgs>
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Fournisseur?: boolean | Vente$FournisseurArgs<ExtArgs>
  }, ExtArgs["result"]["vente"]>

  export type VenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statut?: boolean
    total_ttc?: boolean
    total_ht?: boolean
    remise?: boolean
    detailVenteId?: boolean
    paiementId?: boolean
    entrepriseId?: boolean
    clientId?: boolean
    agentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fournisseurId?: boolean
    detailvente?: boolean | DetailVenteDefaultArgs<ExtArgs>
    peiement?: boolean | PaiementDefaultArgs<ExtArgs>
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Fournisseur?: boolean | Vente$FournisseurArgs<ExtArgs>
  }, ExtArgs["result"]["vente"]>

  export type VenteSelectScalar = {
    id?: boolean
    statut?: boolean
    total_ttc?: boolean
    total_ht?: boolean
    remise?: boolean
    detailVenteId?: boolean
    paiementId?: boolean
    entrepriseId?: boolean
    clientId?: boolean
    agentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fournisseurId?: boolean
  }

  export type VenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statut" | "total_ttc" | "total_ht" | "remise" | "detailVenteId" | "paiementId" | "entrepriseId" | "clientId" | "agentId" | "createdAt" | "updatedAt" | "fournisseurId", ExtArgs["result"]["vente"]>
  export type VenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailvente?: boolean | DetailVenteDefaultArgs<ExtArgs>
    peiement?: boolean | PaiementDefaultArgs<ExtArgs>
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Fournisseur?: boolean | Vente$FournisseurArgs<ExtArgs>
  }
  export type VenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailvente?: boolean | DetailVenteDefaultArgs<ExtArgs>
    peiement?: boolean | PaiementDefaultArgs<ExtArgs>
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Fournisseur?: boolean | Vente$FournisseurArgs<ExtArgs>
  }
  export type VenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailvente?: boolean | DetailVenteDefaultArgs<ExtArgs>
    peiement?: boolean | PaiementDefaultArgs<ExtArgs>
    entreprise?: boolean | EntrepriseDefaultArgs<ExtArgs>
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Fournisseur?: boolean | Vente$FournisseurArgs<ExtArgs>
  }

  export type $VentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vente"
    objects: {
      detailvente: Prisma.$DetailVentePayload<ExtArgs>
      peiement: Prisma.$PaiementPayload<ExtArgs>
      entreprise: Prisma.$EntreprisePayload<ExtArgs>
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      Fournisseur: Prisma.$FournisseurPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      statut: string
      total_ttc: number
      total_ht: number
      remise: number
      detailVenteId: number
      paiementId: number
      entrepriseId: number
      clientId: string
      agentId: string
      createdAt: Date
      updatedAt: Date
      fournisseurId: number | null
    }, ExtArgs["result"]["vente"]>
    composites: {}
  }

  type VenteGetPayload<S extends boolean | null | undefined | VenteDefaultArgs> = $Result.GetResult<Prisma.$VentePayload, S>

  type VenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenteCountAggregateInputType | true
    }

  export interface VenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vente'], meta: { name: 'Vente' } }
    /**
     * Find zero or one Vente that matches the filter.
     * @param {VenteFindUniqueArgs} args - Arguments to find a Vente
     * @example
     * // Get one Vente
     * const vente = await prisma.vente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenteFindUniqueArgs>(args: SelectSubset<T, VenteFindUniqueArgs<ExtArgs>>): Prisma__VenteClient<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenteFindUniqueOrThrowArgs} args - Arguments to find a Vente
     * @example
     * // Get one Vente
     * const vente = await prisma.vente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenteFindUniqueOrThrowArgs>(args: SelectSubset<T, VenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenteClient<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteFindFirstArgs} args - Arguments to find a Vente
     * @example
     * // Get one Vente
     * const vente = await prisma.vente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenteFindFirstArgs>(args?: SelectSubset<T, VenteFindFirstArgs<ExtArgs>>): Prisma__VenteClient<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteFindFirstOrThrowArgs} args - Arguments to find a Vente
     * @example
     * // Get one Vente
     * const vente = await prisma.vente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenteFindFirstOrThrowArgs>(args?: SelectSubset<T, VenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenteClient<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ventes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ventes
     * const ventes = await prisma.vente.findMany()
     * 
     * // Get first 10 Ventes
     * const ventes = await prisma.vente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venteWithIdOnly = await prisma.vente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenteFindManyArgs>(args?: SelectSubset<T, VenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vente.
     * @param {VenteCreateArgs} args - Arguments to create a Vente.
     * @example
     * // Create one Vente
     * const Vente = await prisma.vente.create({
     *   data: {
     *     // ... data to create a Vente
     *   }
     * })
     * 
     */
    create<T extends VenteCreateArgs>(args: SelectSubset<T, VenteCreateArgs<ExtArgs>>): Prisma__VenteClient<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ventes.
     * @param {VenteCreateManyArgs} args - Arguments to create many Ventes.
     * @example
     * // Create many Ventes
     * const vente = await prisma.vente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenteCreateManyArgs>(args?: SelectSubset<T, VenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ventes and returns the data saved in the database.
     * @param {VenteCreateManyAndReturnArgs} args - Arguments to create many Ventes.
     * @example
     * // Create many Ventes
     * const vente = await prisma.vente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ventes and only return the `id`
     * const venteWithIdOnly = await prisma.vente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenteCreateManyAndReturnArgs>(args?: SelectSubset<T, VenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vente.
     * @param {VenteDeleteArgs} args - Arguments to delete one Vente.
     * @example
     * // Delete one Vente
     * const Vente = await prisma.vente.delete({
     *   where: {
     *     // ... filter to delete one Vente
     *   }
     * })
     * 
     */
    delete<T extends VenteDeleteArgs>(args: SelectSubset<T, VenteDeleteArgs<ExtArgs>>): Prisma__VenteClient<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vente.
     * @param {VenteUpdateArgs} args - Arguments to update one Vente.
     * @example
     * // Update one Vente
     * const vente = await prisma.vente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenteUpdateArgs>(args: SelectSubset<T, VenteUpdateArgs<ExtArgs>>): Prisma__VenteClient<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ventes.
     * @param {VenteDeleteManyArgs} args - Arguments to filter Ventes to delete.
     * @example
     * // Delete a few Ventes
     * const { count } = await prisma.vente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenteDeleteManyArgs>(args?: SelectSubset<T, VenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ventes
     * const vente = await prisma.vente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenteUpdateManyArgs>(args: SelectSubset<T, VenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ventes and returns the data updated in the database.
     * @param {VenteUpdateManyAndReturnArgs} args - Arguments to update many Ventes.
     * @example
     * // Update many Ventes
     * const vente = await prisma.vente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ventes and only return the `id`
     * const venteWithIdOnly = await prisma.vente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VenteUpdateManyAndReturnArgs>(args: SelectSubset<T, VenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vente.
     * @param {VenteUpsertArgs} args - Arguments to update or create a Vente.
     * @example
     * // Update or create a Vente
     * const vente = await prisma.vente.upsert({
     *   create: {
     *     // ... data to create a Vente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vente we want to update
     *   }
     * })
     */
    upsert<T extends VenteUpsertArgs>(args: SelectSubset<T, VenteUpsertArgs<ExtArgs>>): Prisma__VenteClient<$Result.GetResult<Prisma.$VentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ventes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteCountArgs} args - Arguments to filter Ventes to count.
     * @example
     * // Count the number of Ventes
     * const count = await prisma.vente.count({
     *   where: {
     *     // ... the filter for the Ventes we want to count
     *   }
     * })
    **/
    count<T extends VenteCountArgs>(
      args?: Subset<T, VenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VenteAggregateArgs>(args: Subset<T, VenteAggregateArgs>): Prisma.PrismaPromise<GetVenteAggregateType<T>>

    /**
     * Group by Vente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenteGroupByArgs['orderBy'] }
        : { orderBy?: VenteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vente model
   */
  readonly fields: VenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detailvente<T extends DetailVenteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetailVenteDefaultArgs<ExtArgs>>): Prisma__DetailVenteClient<$Result.GetResult<Prisma.$DetailVentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    peiement<T extends PaiementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaiementDefaultArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entreprise<T extends EntrepriseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntrepriseDefaultArgs<ExtArgs>>): Prisma__EntrepriseClient<$Result.GetResult<Prisma.$EntreprisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Fournisseur<T extends Vente$FournisseurArgs<ExtArgs> = {}>(args?: Subset<T, Vente$FournisseurArgs<ExtArgs>>): Prisma__FournisseurClient<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vente model
   */
  interface VenteFieldRefs {
    readonly id: FieldRef<"Vente", 'Int'>
    readonly statut: FieldRef<"Vente", 'String'>
    readonly total_ttc: FieldRef<"Vente", 'Float'>
    readonly total_ht: FieldRef<"Vente", 'Float'>
    readonly remise: FieldRef<"Vente", 'Float'>
    readonly detailVenteId: FieldRef<"Vente", 'Int'>
    readonly paiementId: FieldRef<"Vente", 'Int'>
    readonly entrepriseId: FieldRef<"Vente", 'Int'>
    readonly clientId: FieldRef<"Vente", 'String'>
    readonly agentId: FieldRef<"Vente", 'String'>
    readonly createdAt: FieldRef<"Vente", 'DateTime'>
    readonly updatedAt: FieldRef<"Vente", 'DateTime'>
    readonly fournisseurId: FieldRef<"Vente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vente findUnique
   */
  export type VenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    /**
     * Filter, which Vente to fetch.
     */
    where: VenteWhereUniqueInput
  }

  /**
   * Vente findUniqueOrThrow
   */
  export type VenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    /**
     * Filter, which Vente to fetch.
     */
    where: VenteWhereUniqueInput
  }

  /**
   * Vente findFirst
   */
  export type VenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    /**
     * Filter, which Vente to fetch.
     */
    where?: VenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventes to fetch.
     */
    orderBy?: VenteOrderByWithRelationInput | VenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventes.
     */
    cursor?: VenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventes.
     */
    distinct?: VenteScalarFieldEnum | VenteScalarFieldEnum[]
  }

  /**
   * Vente findFirstOrThrow
   */
  export type VenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    /**
     * Filter, which Vente to fetch.
     */
    where?: VenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventes to fetch.
     */
    orderBy?: VenteOrderByWithRelationInput | VenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ventes.
     */
    cursor?: VenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ventes.
     */
    distinct?: VenteScalarFieldEnum | VenteScalarFieldEnum[]
  }

  /**
   * Vente findMany
   */
  export type VenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    /**
     * Filter, which Ventes to fetch.
     */
    where?: VenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ventes to fetch.
     */
    orderBy?: VenteOrderByWithRelationInput | VenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ventes.
     */
    cursor?: VenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ventes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ventes.
     */
    skip?: number
    distinct?: VenteScalarFieldEnum | VenteScalarFieldEnum[]
  }

  /**
   * Vente create
   */
  export type VenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vente.
     */
    data: XOR<VenteCreateInput, VenteUncheckedCreateInput>
  }

  /**
   * Vente createMany
   */
  export type VenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ventes.
     */
    data: VenteCreateManyInput | VenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vente createManyAndReturn
   */
  export type VenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * The data used to create many Ventes.
     */
    data: VenteCreateManyInput | VenteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vente update
   */
  export type VenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vente.
     */
    data: XOR<VenteUpdateInput, VenteUncheckedUpdateInput>
    /**
     * Choose, which Vente to update.
     */
    where: VenteWhereUniqueInput
  }

  /**
   * Vente updateMany
   */
  export type VenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ventes.
     */
    data: XOR<VenteUpdateManyMutationInput, VenteUncheckedUpdateManyInput>
    /**
     * Filter which Ventes to update
     */
    where?: VenteWhereInput
    /**
     * Limit how many Ventes to update.
     */
    limit?: number
  }

  /**
   * Vente updateManyAndReturn
   */
  export type VenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * The data used to update Ventes.
     */
    data: XOR<VenteUpdateManyMutationInput, VenteUncheckedUpdateManyInput>
    /**
     * Filter which Ventes to update
     */
    where?: VenteWhereInput
    /**
     * Limit how many Ventes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vente upsert
   */
  export type VenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vente to update in case it exists.
     */
    where: VenteWhereUniqueInput
    /**
     * In case the Vente found by the `where` argument doesn't exist, create a new Vente with this data.
     */
    create: XOR<VenteCreateInput, VenteUncheckedCreateInput>
    /**
     * In case the Vente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenteUpdateInput, VenteUncheckedUpdateInput>
  }

  /**
   * Vente delete
   */
  export type VenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
    /**
     * Filter which Vente to delete.
     */
    where: VenteWhereUniqueInput
  }

  /**
   * Vente deleteMany
   */
  export type VenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ventes to delete
     */
    where?: VenteWhereInput
    /**
     * Limit how many Ventes to delete.
     */
    limit?: number
  }

  /**
   * Vente.Fournisseur
   */
  export type Vente$FournisseurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fournisseur
     */
    select?: FournisseurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fournisseur
     */
    omit?: FournisseurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FournisseurInclude<ExtArgs> | null
    where?: FournisseurWhereInput
  }

  /**
   * Vente without action
   */
  export type VenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vente
     */
    select?: VenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vente
     */
    omit?: VenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenteInclude<ExtArgs> | null
  }


  /**
   * Model DetailAchat
   */

  export type AggregateDetailAchat = {
    _count: DetailAchatCountAggregateOutputType | null
    _avg: DetailAchatAvgAggregateOutputType | null
    _sum: DetailAchatSumAggregateOutputType | null
    _min: DetailAchatMinAggregateOutputType | null
    _max: DetailAchatMaxAggregateOutputType | null
  }

  export type DetailAchatAvgAggregateOutputType = {
    id: number | null
    produitId: number | null
    qtte: number | null
    prixUnitaire: number | null
    prixTotal: number | null
  }

  export type DetailAchatSumAggregateOutputType = {
    id: number | null
    produitId: number | null
    qtte: number | null
    prixUnitaire: number | null
    prixTotal: number | null
  }

  export type DetailAchatMinAggregateOutputType = {
    id: number | null
    produitId: number | null
    qtte: number | null
    prixUnitaire: number | null
    prixTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DetailAchatMaxAggregateOutputType = {
    id: number | null
    produitId: number | null
    qtte: number | null
    prixUnitaire: number | null
    prixTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DetailAchatCountAggregateOutputType = {
    id: number
    produitId: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DetailAchatAvgAggregateInputType = {
    id?: true
    produitId?: true
    qtte?: true
    prixUnitaire?: true
    prixTotal?: true
  }

  export type DetailAchatSumAggregateInputType = {
    id?: true
    produitId?: true
    qtte?: true
    prixUnitaire?: true
    prixTotal?: true
  }

  export type DetailAchatMinAggregateInputType = {
    id?: true
    produitId?: true
    qtte?: true
    prixUnitaire?: true
    prixTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DetailAchatMaxAggregateInputType = {
    id?: true
    produitId?: true
    qtte?: true
    prixUnitaire?: true
    prixTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DetailAchatCountAggregateInputType = {
    id?: true
    produitId?: true
    qtte?: true
    prixUnitaire?: true
    prixTotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DetailAchatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailAchat to aggregate.
     */
    where?: DetailAchatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailAchats to fetch.
     */
    orderBy?: DetailAchatOrderByWithRelationInput | DetailAchatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailAchatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailAchats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailAchats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailAchats
    **/
    _count?: true | DetailAchatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailAchatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailAchatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailAchatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailAchatMaxAggregateInputType
  }

  export type GetDetailAchatAggregateType<T extends DetailAchatAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailAchat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailAchat[P]>
      : GetScalarType<T[P], AggregateDetailAchat[P]>
  }




  export type DetailAchatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailAchatWhereInput
    orderBy?: DetailAchatOrderByWithAggregationInput | DetailAchatOrderByWithAggregationInput[]
    by: DetailAchatScalarFieldEnum[] | DetailAchatScalarFieldEnum
    having?: DetailAchatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailAchatCountAggregateInputType | true
    _avg?: DetailAchatAvgAggregateInputType
    _sum?: DetailAchatSumAggregateInputType
    _min?: DetailAchatMinAggregateInputType
    _max?: DetailAchatMaxAggregateInputType
  }

  export type DetailAchatGroupByOutputType = {
    id: number
    produitId: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt: Date
    updatedAt: Date
    _count: DetailAchatCountAggregateOutputType | null
    _avg: DetailAchatAvgAggregateOutputType | null
    _sum: DetailAchatSumAggregateOutputType | null
    _min: DetailAchatMinAggregateOutputType | null
    _max: DetailAchatMaxAggregateOutputType | null
  }

  type GetDetailAchatGroupByPayload<T extends DetailAchatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailAchatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailAchatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailAchatGroupByOutputType[P]>
            : GetScalarType<T[P], DetailAchatGroupByOutputType[P]>
        }
      >
    >


  export type DetailAchatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produitId?: boolean
    qtte?: boolean
    prixUnitaire?: boolean
    prixTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
    Achat?: boolean | DetailAchat$AchatArgs<ExtArgs>
    _count?: boolean | DetailAchatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailAchat"]>

  export type DetailAchatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produitId?: boolean
    qtte?: boolean
    prixUnitaire?: boolean
    prixTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailAchat"]>

  export type DetailAchatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produitId?: boolean
    qtte?: boolean
    prixUnitaire?: boolean
    prixTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailAchat"]>

  export type DetailAchatSelectScalar = {
    id?: boolean
    produitId?: boolean
    qtte?: boolean
    prixUnitaire?: boolean
    prixTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DetailAchatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produitId" | "qtte" | "prixUnitaire" | "prixTotal" | "createdAt" | "updatedAt", ExtArgs["result"]["detailAchat"]>
  export type DetailAchatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
    Achat?: boolean | DetailAchat$AchatArgs<ExtArgs>
    _count?: boolean | DetailAchatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DetailAchatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }
  export type DetailAchatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }

  export type $DetailAchatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailAchat"
    objects: {
      produit: Prisma.$ProduitPayload<ExtArgs>
      Achat: Prisma.$AchatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produitId: number
      qtte: number
      prixUnitaire: number
      prixTotal: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["detailAchat"]>
    composites: {}
  }

  type DetailAchatGetPayload<S extends boolean | null | undefined | DetailAchatDefaultArgs> = $Result.GetResult<Prisma.$DetailAchatPayload, S>

  type DetailAchatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailAchatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailAchatCountAggregateInputType | true
    }

  export interface DetailAchatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailAchat'], meta: { name: 'DetailAchat' } }
    /**
     * Find zero or one DetailAchat that matches the filter.
     * @param {DetailAchatFindUniqueArgs} args - Arguments to find a DetailAchat
     * @example
     * // Get one DetailAchat
     * const detailAchat = await prisma.detailAchat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailAchatFindUniqueArgs>(args: SelectSubset<T, DetailAchatFindUniqueArgs<ExtArgs>>): Prisma__DetailAchatClient<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailAchat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailAchatFindUniqueOrThrowArgs} args - Arguments to find a DetailAchat
     * @example
     * // Get one DetailAchat
     * const detailAchat = await prisma.detailAchat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailAchatFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailAchatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailAchatClient<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailAchat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailAchatFindFirstArgs} args - Arguments to find a DetailAchat
     * @example
     * // Get one DetailAchat
     * const detailAchat = await prisma.detailAchat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailAchatFindFirstArgs>(args?: SelectSubset<T, DetailAchatFindFirstArgs<ExtArgs>>): Prisma__DetailAchatClient<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailAchat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailAchatFindFirstOrThrowArgs} args - Arguments to find a DetailAchat
     * @example
     * // Get one DetailAchat
     * const detailAchat = await prisma.detailAchat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailAchatFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailAchatFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailAchatClient<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailAchats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailAchatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailAchats
     * const detailAchats = await prisma.detailAchat.findMany()
     * 
     * // Get first 10 DetailAchats
     * const detailAchats = await prisma.detailAchat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailAchatWithIdOnly = await prisma.detailAchat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailAchatFindManyArgs>(args?: SelectSubset<T, DetailAchatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailAchat.
     * @param {DetailAchatCreateArgs} args - Arguments to create a DetailAchat.
     * @example
     * // Create one DetailAchat
     * const DetailAchat = await prisma.detailAchat.create({
     *   data: {
     *     // ... data to create a DetailAchat
     *   }
     * })
     * 
     */
    create<T extends DetailAchatCreateArgs>(args: SelectSubset<T, DetailAchatCreateArgs<ExtArgs>>): Prisma__DetailAchatClient<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailAchats.
     * @param {DetailAchatCreateManyArgs} args - Arguments to create many DetailAchats.
     * @example
     * // Create many DetailAchats
     * const detailAchat = await prisma.detailAchat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailAchatCreateManyArgs>(args?: SelectSubset<T, DetailAchatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetailAchats and returns the data saved in the database.
     * @param {DetailAchatCreateManyAndReturnArgs} args - Arguments to create many DetailAchats.
     * @example
     * // Create many DetailAchats
     * const detailAchat = await prisma.detailAchat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetailAchats and only return the `id`
     * const detailAchatWithIdOnly = await prisma.detailAchat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetailAchatCreateManyAndReturnArgs>(args?: SelectSubset<T, DetailAchatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetailAchat.
     * @param {DetailAchatDeleteArgs} args - Arguments to delete one DetailAchat.
     * @example
     * // Delete one DetailAchat
     * const DetailAchat = await prisma.detailAchat.delete({
     *   where: {
     *     // ... filter to delete one DetailAchat
     *   }
     * })
     * 
     */
    delete<T extends DetailAchatDeleteArgs>(args: SelectSubset<T, DetailAchatDeleteArgs<ExtArgs>>): Prisma__DetailAchatClient<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailAchat.
     * @param {DetailAchatUpdateArgs} args - Arguments to update one DetailAchat.
     * @example
     * // Update one DetailAchat
     * const detailAchat = await prisma.detailAchat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailAchatUpdateArgs>(args: SelectSubset<T, DetailAchatUpdateArgs<ExtArgs>>): Prisma__DetailAchatClient<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailAchats.
     * @param {DetailAchatDeleteManyArgs} args - Arguments to filter DetailAchats to delete.
     * @example
     * // Delete a few DetailAchats
     * const { count } = await prisma.detailAchat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailAchatDeleteManyArgs>(args?: SelectSubset<T, DetailAchatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailAchats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailAchatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailAchats
     * const detailAchat = await prisma.detailAchat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailAchatUpdateManyArgs>(args: SelectSubset<T, DetailAchatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailAchats and returns the data updated in the database.
     * @param {DetailAchatUpdateManyAndReturnArgs} args - Arguments to update many DetailAchats.
     * @example
     * // Update many DetailAchats
     * const detailAchat = await prisma.detailAchat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetailAchats and only return the `id`
     * const detailAchatWithIdOnly = await prisma.detailAchat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetailAchatUpdateManyAndReturnArgs>(args: SelectSubset<T, DetailAchatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetailAchat.
     * @param {DetailAchatUpsertArgs} args - Arguments to update or create a DetailAchat.
     * @example
     * // Update or create a DetailAchat
     * const detailAchat = await prisma.detailAchat.upsert({
     *   create: {
     *     // ... data to create a DetailAchat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailAchat we want to update
     *   }
     * })
     */
    upsert<T extends DetailAchatUpsertArgs>(args: SelectSubset<T, DetailAchatUpsertArgs<ExtArgs>>): Prisma__DetailAchatClient<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailAchats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailAchatCountArgs} args - Arguments to filter DetailAchats to count.
     * @example
     * // Count the number of DetailAchats
     * const count = await prisma.detailAchat.count({
     *   where: {
     *     // ... the filter for the DetailAchats we want to count
     *   }
     * })
    **/
    count<T extends DetailAchatCountArgs>(
      args?: Subset<T, DetailAchatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailAchatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailAchat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailAchatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetailAchatAggregateArgs>(args: Subset<T, DetailAchatAggregateArgs>): Prisma.PrismaPromise<GetDetailAchatAggregateType<T>>

    /**
     * Group by DetailAchat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailAchatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetailAchatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailAchatGroupByArgs['orderBy'] }
        : { orderBy?: DetailAchatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetailAchatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailAchatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailAchat model
   */
  readonly fields: DetailAchatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailAchat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailAchatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produit<T extends ProduitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProduitDefaultArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Achat<T extends DetailAchat$AchatArgs<ExtArgs> = {}>(args?: Subset<T, DetailAchat$AchatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DetailAchat model
   */
  interface DetailAchatFieldRefs {
    readonly id: FieldRef<"DetailAchat", 'Int'>
    readonly produitId: FieldRef<"DetailAchat", 'Int'>
    readonly qtte: FieldRef<"DetailAchat", 'Int'>
    readonly prixUnitaire: FieldRef<"DetailAchat", 'Float'>
    readonly prixTotal: FieldRef<"DetailAchat", 'Float'>
    readonly createdAt: FieldRef<"DetailAchat", 'DateTime'>
    readonly updatedAt: FieldRef<"DetailAchat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DetailAchat findUnique
   */
  export type DetailAchatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatInclude<ExtArgs> | null
    /**
     * Filter, which DetailAchat to fetch.
     */
    where: DetailAchatWhereUniqueInput
  }

  /**
   * DetailAchat findUniqueOrThrow
   */
  export type DetailAchatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatInclude<ExtArgs> | null
    /**
     * Filter, which DetailAchat to fetch.
     */
    where: DetailAchatWhereUniqueInput
  }

  /**
   * DetailAchat findFirst
   */
  export type DetailAchatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatInclude<ExtArgs> | null
    /**
     * Filter, which DetailAchat to fetch.
     */
    where?: DetailAchatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailAchats to fetch.
     */
    orderBy?: DetailAchatOrderByWithRelationInput | DetailAchatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailAchats.
     */
    cursor?: DetailAchatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailAchats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailAchats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailAchats.
     */
    distinct?: DetailAchatScalarFieldEnum | DetailAchatScalarFieldEnum[]
  }

  /**
   * DetailAchat findFirstOrThrow
   */
  export type DetailAchatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatInclude<ExtArgs> | null
    /**
     * Filter, which DetailAchat to fetch.
     */
    where?: DetailAchatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailAchats to fetch.
     */
    orderBy?: DetailAchatOrderByWithRelationInput | DetailAchatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailAchats.
     */
    cursor?: DetailAchatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailAchats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailAchats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailAchats.
     */
    distinct?: DetailAchatScalarFieldEnum | DetailAchatScalarFieldEnum[]
  }

  /**
   * DetailAchat findMany
   */
  export type DetailAchatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatInclude<ExtArgs> | null
    /**
     * Filter, which DetailAchats to fetch.
     */
    where?: DetailAchatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailAchats to fetch.
     */
    orderBy?: DetailAchatOrderByWithRelationInput | DetailAchatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailAchats.
     */
    cursor?: DetailAchatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailAchats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailAchats.
     */
    skip?: number
    distinct?: DetailAchatScalarFieldEnum | DetailAchatScalarFieldEnum[]
  }

  /**
   * DetailAchat create
   */
  export type DetailAchatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailAchat.
     */
    data: XOR<DetailAchatCreateInput, DetailAchatUncheckedCreateInput>
  }

  /**
   * DetailAchat createMany
   */
  export type DetailAchatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailAchats.
     */
    data: DetailAchatCreateManyInput | DetailAchatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailAchat createManyAndReturn
   */
  export type DetailAchatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * The data used to create many DetailAchats.
     */
    data: DetailAchatCreateManyInput | DetailAchatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailAchat update
   */
  export type DetailAchatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailAchat.
     */
    data: XOR<DetailAchatUpdateInput, DetailAchatUncheckedUpdateInput>
    /**
     * Choose, which DetailAchat to update.
     */
    where: DetailAchatWhereUniqueInput
  }

  /**
   * DetailAchat updateMany
   */
  export type DetailAchatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailAchats.
     */
    data: XOR<DetailAchatUpdateManyMutationInput, DetailAchatUncheckedUpdateManyInput>
    /**
     * Filter which DetailAchats to update
     */
    where?: DetailAchatWhereInput
    /**
     * Limit how many DetailAchats to update.
     */
    limit?: number
  }

  /**
   * DetailAchat updateManyAndReturn
   */
  export type DetailAchatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * The data used to update DetailAchats.
     */
    data: XOR<DetailAchatUpdateManyMutationInput, DetailAchatUncheckedUpdateManyInput>
    /**
     * Filter which DetailAchats to update
     */
    where?: DetailAchatWhereInput
    /**
     * Limit how many DetailAchats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailAchat upsert
   */
  export type DetailAchatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailAchat to update in case it exists.
     */
    where: DetailAchatWhereUniqueInput
    /**
     * In case the DetailAchat found by the `where` argument doesn't exist, create a new DetailAchat with this data.
     */
    create: XOR<DetailAchatCreateInput, DetailAchatUncheckedCreateInput>
    /**
     * In case the DetailAchat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailAchatUpdateInput, DetailAchatUncheckedUpdateInput>
  }

  /**
   * DetailAchat delete
   */
  export type DetailAchatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatInclude<ExtArgs> | null
    /**
     * Filter which DetailAchat to delete.
     */
    where: DetailAchatWhereUniqueInput
  }

  /**
   * DetailAchat deleteMany
   */
  export type DetailAchatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailAchats to delete
     */
    where?: DetailAchatWhereInput
    /**
     * Limit how many DetailAchats to delete.
     */
    limit?: number
  }

  /**
   * DetailAchat.Achat
   */
  export type DetailAchat$AchatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    where?: AchatWhereInput
    orderBy?: AchatOrderByWithRelationInput | AchatOrderByWithRelationInput[]
    cursor?: AchatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchatScalarFieldEnum | AchatScalarFieldEnum[]
  }

  /**
   * DetailAchat without action
   */
  export type DetailAchatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailAchat
     */
    select?: DetailAchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailAchat
     */
    omit?: DetailAchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailAchatInclude<ExtArgs> | null
  }


  /**
   * Model Achat
   */

  export type AggregateAchat = {
    _count: AchatCountAggregateOutputType | null
    _avg: AchatAvgAggregateOutputType | null
    _sum: AchatSumAggregateOutputType | null
    _min: AchatMinAggregateOutputType | null
    _max: AchatMaxAggregateOutputType | null
  }

  export type AchatAvgAggregateOutputType = {
    id: number | null
    fournisseurId: number | null
    total: number | null
    detailAchatId: number | null
    paiementId: number | null
  }

  export type AchatSumAggregateOutputType = {
    id: number | null
    fournisseurId: number | null
    total: number | null
    detailAchatId: number | null
    paiementId: number | null
  }

  export type AchatMinAggregateOutputType = {
    id: number | null
    statut: string | null
    fournisseurId: number | null
    total: number | null
    detailAchatId: number | null
    agentId: string | null
    paiementId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AchatMaxAggregateOutputType = {
    id: number | null
    statut: string | null
    fournisseurId: number | null
    total: number | null
    detailAchatId: number | null
    agentId: string | null
    paiementId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AchatCountAggregateOutputType = {
    id: number
    statut: number
    fournisseurId: number
    total: number
    detailAchatId: number
    agentId: number
    paiementId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AchatAvgAggregateInputType = {
    id?: true
    fournisseurId?: true
    total?: true
    detailAchatId?: true
    paiementId?: true
  }

  export type AchatSumAggregateInputType = {
    id?: true
    fournisseurId?: true
    total?: true
    detailAchatId?: true
    paiementId?: true
  }

  export type AchatMinAggregateInputType = {
    id?: true
    statut?: true
    fournisseurId?: true
    total?: true
    detailAchatId?: true
    agentId?: true
    paiementId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AchatMaxAggregateInputType = {
    id?: true
    statut?: true
    fournisseurId?: true
    total?: true
    detailAchatId?: true
    agentId?: true
    paiementId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AchatCountAggregateInputType = {
    id?: true
    statut?: true
    fournisseurId?: true
    total?: true
    detailAchatId?: true
    agentId?: true
    paiementId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AchatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achat to aggregate.
     */
    where?: AchatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achats to fetch.
     */
    orderBy?: AchatOrderByWithRelationInput | AchatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achats
    **/
    _count?: true | AchatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchatMaxAggregateInputType
  }

  export type GetAchatAggregateType<T extends AchatAggregateArgs> = {
        [P in keyof T & keyof AggregateAchat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchat[P]>
      : GetScalarType<T[P], AggregateAchat[P]>
  }




  export type AchatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchatWhereInput
    orderBy?: AchatOrderByWithAggregationInput | AchatOrderByWithAggregationInput[]
    by: AchatScalarFieldEnum[] | AchatScalarFieldEnum
    having?: AchatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchatCountAggregateInputType | true
    _avg?: AchatAvgAggregateInputType
    _sum?: AchatSumAggregateInputType
    _min?: AchatMinAggregateInputType
    _max?: AchatMaxAggregateInputType
  }

  export type AchatGroupByOutputType = {
    id: number
    statut: string
    fournisseurId: number
    total: number
    detailAchatId: number
    agentId: string
    paiementId: number
    createdAt: Date
    updatedAt: Date
    _count: AchatCountAggregateOutputType | null
    _avg: AchatAvgAggregateOutputType | null
    _sum: AchatSumAggregateOutputType | null
    _min: AchatMinAggregateOutputType | null
    _max: AchatMaxAggregateOutputType | null
  }

  type GetAchatGroupByPayload<T extends AchatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchatGroupByOutputType[P]>
            : GetScalarType<T[P], AchatGroupByOutputType[P]>
        }
      >
    >


  export type AchatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statut?: boolean
    fournisseurId?: boolean
    total?: boolean
    detailAchatId?: boolean
    agentId?: boolean
    paiementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fournisseur?: boolean | FournisseurDefaultArgs<ExtArgs>
    detailAchat?: boolean | DetailAchatDefaultArgs<ExtArgs>
    agent?: boolean | UtilisateurDefaultArgs<ExtArgs>
    paiement?: boolean | PaiementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achat"]>

  export type AchatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statut?: boolean
    fournisseurId?: boolean
    total?: boolean
    detailAchatId?: boolean
    agentId?: boolean
    paiementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fournisseur?: boolean | FournisseurDefaultArgs<ExtArgs>
    detailAchat?: boolean | DetailAchatDefaultArgs<ExtArgs>
    agent?: boolean | UtilisateurDefaultArgs<ExtArgs>
    paiement?: boolean | PaiementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achat"]>

  export type AchatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    statut?: boolean
    fournisseurId?: boolean
    total?: boolean
    detailAchatId?: boolean
    agentId?: boolean
    paiementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fournisseur?: boolean | FournisseurDefaultArgs<ExtArgs>
    detailAchat?: boolean | DetailAchatDefaultArgs<ExtArgs>
    agent?: boolean | UtilisateurDefaultArgs<ExtArgs>
    paiement?: boolean | PaiementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achat"]>

  export type AchatSelectScalar = {
    id?: boolean
    statut?: boolean
    fournisseurId?: boolean
    total?: boolean
    detailAchatId?: boolean
    agentId?: boolean
    paiementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AchatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "statut" | "fournisseurId" | "total" | "detailAchatId" | "agentId" | "paiementId" | "createdAt" | "updatedAt", ExtArgs["result"]["achat"]>
  export type AchatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fournisseur?: boolean | FournisseurDefaultArgs<ExtArgs>
    detailAchat?: boolean | DetailAchatDefaultArgs<ExtArgs>
    agent?: boolean | UtilisateurDefaultArgs<ExtArgs>
    paiement?: boolean | PaiementDefaultArgs<ExtArgs>
  }
  export type AchatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fournisseur?: boolean | FournisseurDefaultArgs<ExtArgs>
    detailAchat?: boolean | DetailAchatDefaultArgs<ExtArgs>
    agent?: boolean | UtilisateurDefaultArgs<ExtArgs>
    paiement?: boolean | PaiementDefaultArgs<ExtArgs>
  }
  export type AchatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fournisseur?: boolean | FournisseurDefaultArgs<ExtArgs>
    detailAchat?: boolean | DetailAchatDefaultArgs<ExtArgs>
    agent?: boolean | UtilisateurDefaultArgs<ExtArgs>
    paiement?: boolean | PaiementDefaultArgs<ExtArgs>
  }

  export type $AchatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achat"
    objects: {
      fournisseur: Prisma.$FournisseurPayload<ExtArgs>
      detailAchat: Prisma.$DetailAchatPayload<ExtArgs>
      agent: Prisma.$UtilisateurPayload<ExtArgs>
      paiement: Prisma.$PaiementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      statut: string
      fournisseurId: number
      total: number
      detailAchatId: number
      agentId: string
      paiementId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["achat"]>
    composites: {}
  }

  type AchatGetPayload<S extends boolean | null | undefined | AchatDefaultArgs> = $Result.GetResult<Prisma.$AchatPayload, S>

  type AchatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AchatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchatCountAggregateInputType | true
    }

  export interface AchatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achat'], meta: { name: 'Achat' } }
    /**
     * Find zero or one Achat that matches the filter.
     * @param {AchatFindUniqueArgs} args - Arguments to find a Achat
     * @example
     * // Get one Achat
     * const achat = await prisma.achat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchatFindUniqueArgs>(args: SelectSubset<T, AchatFindUniqueArgs<ExtArgs>>): Prisma__AchatClient<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AchatFindUniqueOrThrowArgs} args - Arguments to find a Achat
     * @example
     * // Get one Achat
     * const achat = await prisma.achat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchatFindUniqueOrThrowArgs>(args: SelectSubset<T, AchatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchatClient<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatFindFirstArgs} args - Arguments to find a Achat
     * @example
     * // Get one Achat
     * const achat = await prisma.achat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchatFindFirstArgs>(args?: SelectSubset<T, AchatFindFirstArgs<ExtArgs>>): Prisma__AchatClient<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatFindFirstOrThrowArgs} args - Arguments to find a Achat
     * @example
     * // Get one Achat
     * const achat = await prisma.achat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchatFindFirstOrThrowArgs>(args?: SelectSubset<T, AchatFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchatClient<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achats
     * const achats = await prisma.achat.findMany()
     * 
     * // Get first 10 Achats
     * const achats = await prisma.achat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achatWithIdOnly = await prisma.achat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchatFindManyArgs>(args?: SelectSubset<T, AchatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achat.
     * @param {AchatCreateArgs} args - Arguments to create a Achat.
     * @example
     * // Create one Achat
     * const Achat = await prisma.achat.create({
     *   data: {
     *     // ... data to create a Achat
     *   }
     * })
     * 
     */
    create<T extends AchatCreateArgs>(args: SelectSubset<T, AchatCreateArgs<ExtArgs>>): Prisma__AchatClient<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achats.
     * @param {AchatCreateManyArgs} args - Arguments to create many Achats.
     * @example
     * // Create many Achats
     * const achat = await prisma.achat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchatCreateManyArgs>(args?: SelectSubset<T, AchatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achats and returns the data saved in the database.
     * @param {AchatCreateManyAndReturnArgs} args - Arguments to create many Achats.
     * @example
     * // Create many Achats
     * const achat = await prisma.achat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achats and only return the `id`
     * const achatWithIdOnly = await prisma.achat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchatCreateManyAndReturnArgs>(args?: SelectSubset<T, AchatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achat.
     * @param {AchatDeleteArgs} args - Arguments to delete one Achat.
     * @example
     * // Delete one Achat
     * const Achat = await prisma.achat.delete({
     *   where: {
     *     // ... filter to delete one Achat
     *   }
     * })
     * 
     */
    delete<T extends AchatDeleteArgs>(args: SelectSubset<T, AchatDeleteArgs<ExtArgs>>): Prisma__AchatClient<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achat.
     * @param {AchatUpdateArgs} args - Arguments to update one Achat.
     * @example
     * // Update one Achat
     * const achat = await prisma.achat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchatUpdateArgs>(args: SelectSubset<T, AchatUpdateArgs<ExtArgs>>): Prisma__AchatClient<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achats.
     * @param {AchatDeleteManyArgs} args - Arguments to filter Achats to delete.
     * @example
     * // Delete a few Achats
     * const { count } = await prisma.achat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchatDeleteManyArgs>(args?: SelectSubset<T, AchatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achats
     * const achat = await prisma.achat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchatUpdateManyArgs>(args: SelectSubset<T, AchatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achats and returns the data updated in the database.
     * @param {AchatUpdateManyAndReturnArgs} args - Arguments to update many Achats.
     * @example
     * // Update many Achats
     * const achat = await prisma.achat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achats and only return the `id`
     * const achatWithIdOnly = await prisma.achat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AchatUpdateManyAndReturnArgs>(args: SelectSubset<T, AchatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achat.
     * @param {AchatUpsertArgs} args - Arguments to update or create a Achat.
     * @example
     * // Update or create a Achat
     * const achat = await prisma.achat.upsert({
     *   create: {
     *     // ... data to create a Achat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achat we want to update
     *   }
     * })
     */
    upsert<T extends AchatUpsertArgs>(args: SelectSubset<T, AchatUpsertArgs<ExtArgs>>): Prisma__AchatClient<$Result.GetResult<Prisma.$AchatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatCountArgs} args - Arguments to filter Achats to count.
     * @example
     * // Count the number of Achats
     * const count = await prisma.achat.count({
     *   where: {
     *     // ... the filter for the Achats we want to count
     *   }
     * })
    **/
    count<T extends AchatCountArgs>(
      args?: Subset<T, AchatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AchatAggregateArgs>(args: Subset<T, AchatAggregateArgs>): Prisma.PrismaPromise<GetAchatAggregateType<T>>

    /**
     * Group by Achat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AchatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchatGroupByArgs['orderBy'] }
        : { orderBy?: AchatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AchatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achat model
   */
  readonly fields: AchatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fournisseur<T extends FournisseurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FournisseurDefaultArgs<ExtArgs>>): Prisma__FournisseurClient<$Result.GetResult<Prisma.$FournisseurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detailAchat<T extends DetailAchatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetailAchatDefaultArgs<ExtArgs>>): Prisma__DetailAchatClient<$Result.GetResult<Prisma.$DetailAchatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agent<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paiement<T extends PaiementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaiementDefaultArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Achat model
   */
  interface AchatFieldRefs {
    readonly id: FieldRef<"Achat", 'Int'>
    readonly statut: FieldRef<"Achat", 'String'>
    readonly fournisseurId: FieldRef<"Achat", 'Int'>
    readonly total: FieldRef<"Achat", 'Float'>
    readonly detailAchatId: FieldRef<"Achat", 'Int'>
    readonly agentId: FieldRef<"Achat", 'String'>
    readonly paiementId: FieldRef<"Achat", 'Int'>
    readonly createdAt: FieldRef<"Achat", 'DateTime'>
    readonly updatedAt: FieldRef<"Achat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Achat findUnique
   */
  export type AchatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    /**
     * Filter, which Achat to fetch.
     */
    where: AchatWhereUniqueInput
  }

  /**
   * Achat findUniqueOrThrow
   */
  export type AchatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    /**
     * Filter, which Achat to fetch.
     */
    where: AchatWhereUniqueInput
  }

  /**
   * Achat findFirst
   */
  export type AchatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    /**
     * Filter, which Achat to fetch.
     */
    where?: AchatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achats to fetch.
     */
    orderBy?: AchatOrderByWithRelationInput | AchatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achats.
     */
    cursor?: AchatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achats.
     */
    distinct?: AchatScalarFieldEnum | AchatScalarFieldEnum[]
  }

  /**
   * Achat findFirstOrThrow
   */
  export type AchatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    /**
     * Filter, which Achat to fetch.
     */
    where?: AchatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achats to fetch.
     */
    orderBy?: AchatOrderByWithRelationInput | AchatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achats.
     */
    cursor?: AchatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achats.
     */
    distinct?: AchatScalarFieldEnum | AchatScalarFieldEnum[]
  }

  /**
   * Achat findMany
   */
  export type AchatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    /**
     * Filter, which Achats to fetch.
     */
    where?: AchatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achats to fetch.
     */
    orderBy?: AchatOrderByWithRelationInput | AchatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achats.
     */
    cursor?: AchatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achats.
     */
    skip?: number
    distinct?: AchatScalarFieldEnum | AchatScalarFieldEnum[]
  }

  /**
   * Achat create
   */
  export type AchatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    /**
     * The data needed to create a Achat.
     */
    data: XOR<AchatCreateInput, AchatUncheckedCreateInput>
  }

  /**
   * Achat createMany
   */
  export type AchatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achats.
     */
    data: AchatCreateManyInput | AchatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achat createManyAndReturn
   */
  export type AchatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * The data used to create many Achats.
     */
    data: AchatCreateManyInput | AchatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achat update
   */
  export type AchatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    /**
     * The data needed to update a Achat.
     */
    data: XOR<AchatUpdateInput, AchatUncheckedUpdateInput>
    /**
     * Choose, which Achat to update.
     */
    where: AchatWhereUniqueInput
  }

  /**
   * Achat updateMany
   */
  export type AchatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achats.
     */
    data: XOR<AchatUpdateManyMutationInput, AchatUncheckedUpdateManyInput>
    /**
     * Filter which Achats to update
     */
    where?: AchatWhereInput
    /**
     * Limit how many Achats to update.
     */
    limit?: number
  }

  /**
   * Achat updateManyAndReturn
   */
  export type AchatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * The data used to update Achats.
     */
    data: XOR<AchatUpdateManyMutationInput, AchatUncheckedUpdateManyInput>
    /**
     * Filter which Achats to update
     */
    where?: AchatWhereInput
    /**
     * Limit how many Achats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Achat upsert
   */
  export type AchatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    /**
     * The filter to search for the Achat to update in case it exists.
     */
    where: AchatWhereUniqueInput
    /**
     * In case the Achat found by the `where` argument doesn't exist, create a new Achat with this data.
     */
    create: XOR<AchatCreateInput, AchatUncheckedCreateInput>
    /**
     * In case the Achat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchatUpdateInput, AchatUncheckedUpdateInput>
  }

  /**
   * Achat delete
   */
  export type AchatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
    /**
     * Filter which Achat to delete.
     */
    where: AchatWhereUniqueInput
  }

  /**
   * Achat deleteMany
   */
  export type AchatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achats to delete
     */
    where?: AchatWhereInput
    /**
     * Limit how many Achats to delete.
     */
    limit?: number
  }

  /**
   * Achat without action
   */
  export type AchatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achat
     */
    select?: AchatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Achat
     */
    omit?: AchatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchatInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EntrepriseScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    encronyme: 'encronyme',
    code_postale: 'code_postale',
    adresse: 'adresse',
    tel: 'tel',
    site: 'site',
    email: 'email',
    decription: 'decription',
    logo: 'logo'
  };

  export type EntrepriseScalarFieldEnum = (typeof EntrepriseScalarFieldEnum)[keyof typeof EntrepriseScalarFieldEnum]


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nom: 'nom',
    postnom: 'postnom',
    nom_complet: 'nom_complet',
    sexe: 'sexe',
    role: 'role',
    poste: 'poste',
    picture: 'picture',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const AdresseScalarFieldEnum: {
    id: 'id',
    ville: 'ville',
    commune: 'commune',
    adresse: 'adresse',
    utilisateurId: 'utilisateurId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdresseScalarFieldEnum = (typeof AdresseScalarFieldEnum)[keyof typeof AdresseScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    tel: 'tel',
    utilisateurId: 'utilisateurId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const FournisseurScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    email: 'email',
    code_postal: 'code_postal',
    adresseId: 'adresseId',
    contactId: 'contactId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FournisseurScalarFieldEnum = (typeof FournisseurScalarFieldEnum)[keyof typeof FournisseurScalarFieldEnum]


  export const TeneurScalarFieldEnum: {
    id: 'id',
    valeur: 'valeur'
  };

  export type TeneurScalarFieldEnum = (typeof TeneurScalarFieldEnum)[keyof typeof TeneurScalarFieldEnum]


  export const ProduitScalarFieldEnum: {
    id: 'id',
    designation: 'designation',
    prix: 'prix',
    qtte: 'qtte',
    description: 'description',
    teneurId: 'teneurId',
    utilisateurId: 'utilisateurId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProduitScalarFieldEnum = (typeof ProduitScalarFieldEnum)[keyof typeof ProduitScalarFieldEnum]


  export const DetailVenteScalarFieldEnum: {
    id: 'id',
    produitId: 'produitId',
    qtte: 'qtte',
    prixUnitaire: 'prixUnitaire',
    prixTotal: 'prixTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DetailVenteScalarFieldEnum = (typeof DetailVenteScalarFieldEnum)[keyof typeof DetailVenteScalarFieldEnum]


  export const PaiementScalarFieldEnum: {
    id: 'id',
    montant: 'montant',
    moyen_paiement: 'moyen_paiement',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaiementScalarFieldEnum = (typeof PaiementScalarFieldEnum)[keyof typeof PaiementScalarFieldEnum]


  export const VenteScalarFieldEnum: {
    id: 'id',
    statut: 'statut',
    total_ttc: 'total_ttc',
    total_ht: 'total_ht',
    remise: 'remise',
    detailVenteId: 'detailVenteId',
    paiementId: 'paiementId',
    entrepriseId: 'entrepriseId',
    clientId: 'clientId',
    agentId: 'agentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fournisseurId: 'fournisseurId'
  };

  export type VenteScalarFieldEnum = (typeof VenteScalarFieldEnum)[keyof typeof VenteScalarFieldEnum]


  export const DetailAchatScalarFieldEnum: {
    id: 'id',
    produitId: 'produitId',
    qtte: 'qtte',
    prixUnitaire: 'prixUnitaire',
    prixTotal: 'prixTotal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DetailAchatScalarFieldEnum = (typeof DetailAchatScalarFieldEnum)[keyof typeof DetailAchatScalarFieldEnum]


  export const AchatScalarFieldEnum: {
    id: 'id',
    statut: 'statut',
    fournisseurId: 'fournisseurId',
    total: 'total',
    detailAchatId: 'detailAchatId',
    agentId: 'agentId',
    paiementId: 'paiementId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AchatScalarFieldEnum = (typeof AchatScalarFieldEnum)[keyof typeof AchatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Sexe'
   */
  export type EnumSexeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexe'>
    


  /**
   * Reference to a field of type 'Sexe[]'
   */
  export type ListEnumSexeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexe[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Poste'
   */
  export type EnumPosteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Poste'>
    


  /**
   * Reference to a field of type 'Poste[]'
   */
  export type ListEnumPosteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Poste[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'MoyenPaiment'
   */
  export type EnumMoyenPaimentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MoyenPaiment'>
    


  /**
   * Reference to a field of type 'MoyenPaiment[]'
   */
  export type ListEnumMoyenPaimentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MoyenPaiment[]'>
    
  /**
   * Deep Input Types
   */


  export type EntrepriseWhereInput = {
    AND?: EntrepriseWhereInput | EntrepriseWhereInput[]
    OR?: EntrepriseWhereInput[]
    NOT?: EntrepriseWhereInput | EntrepriseWhereInput[]
    id?: IntFilter<"Entreprise"> | number
    nom?: StringFilter<"Entreprise"> | string
    encronyme?: StringFilter<"Entreprise"> | string
    code_postale?: StringFilter<"Entreprise"> | string
    adresse?: StringFilter<"Entreprise"> | string
    tel?: StringFilter<"Entreprise"> | string
    site?: StringNullableFilter<"Entreprise"> | string | null
    email?: StringFilter<"Entreprise"> | string
    decription?: StringNullableFilter<"Entreprise"> | string | null
    logo?: StringNullableFilter<"Entreprise"> | string | null
    Vente?: VenteListRelationFilter
  }

  export type EntrepriseOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    encronyme?: SortOrder
    code_postale?: SortOrder
    adresse?: SortOrder
    tel?: SortOrder
    site?: SortOrderInput | SortOrder
    email?: SortOrder
    decription?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    Vente?: VenteOrderByRelationAggregateInput
  }

  export type EntrepriseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nom?: string
    encronyme?: string
    code_postale?: string
    tel?: string
    email?: string
    AND?: EntrepriseWhereInput | EntrepriseWhereInput[]
    OR?: EntrepriseWhereInput[]
    NOT?: EntrepriseWhereInput | EntrepriseWhereInput[]
    adresse?: StringFilter<"Entreprise"> | string
    site?: StringNullableFilter<"Entreprise"> | string | null
    decription?: StringNullableFilter<"Entreprise"> | string | null
    logo?: StringNullableFilter<"Entreprise"> | string | null
    Vente?: VenteListRelationFilter
  }, "id" | "nom" | "encronyme" | "code_postale" | "tel" | "email">

  export type EntrepriseOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    encronyme?: SortOrder
    code_postale?: SortOrder
    adresse?: SortOrder
    tel?: SortOrder
    site?: SortOrderInput | SortOrder
    email?: SortOrder
    decription?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    _count?: EntrepriseCountOrderByAggregateInput
    _avg?: EntrepriseAvgOrderByAggregateInput
    _max?: EntrepriseMaxOrderByAggregateInput
    _min?: EntrepriseMinOrderByAggregateInput
    _sum?: EntrepriseSumOrderByAggregateInput
  }

  export type EntrepriseScalarWhereWithAggregatesInput = {
    AND?: EntrepriseScalarWhereWithAggregatesInput | EntrepriseScalarWhereWithAggregatesInput[]
    OR?: EntrepriseScalarWhereWithAggregatesInput[]
    NOT?: EntrepriseScalarWhereWithAggregatesInput | EntrepriseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entreprise"> | number
    nom?: StringWithAggregatesFilter<"Entreprise"> | string
    encronyme?: StringWithAggregatesFilter<"Entreprise"> | string
    code_postale?: StringWithAggregatesFilter<"Entreprise"> | string
    adresse?: StringWithAggregatesFilter<"Entreprise"> | string
    tel?: StringWithAggregatesFilter<"Entreprise"> | string
    site?: StringNullableWithAggregatesFilter<"Entreprise"> | string | null
    email?: StringWithAggregatesFilter<"Entreprise"> | string
    decription?: StringNullableWithAggregatesFilter<"Entreprise"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Entreprise"> | string | null
  }

  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    postnom?: StringFilter<"Utilisateur"> | string
    nom_complet?: StringNullableFilter<"Utilisateur"> | string | null
    sexe?: EnumSexeNullableFilter<"Utilisateur"> | $Enums.Sexe | null
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    poste?: EnumPosteNullableFilter<"Utilisateur"> | $Enums.Poste | null
    picture?: StringNullableFilter<"Utilisateur"> | string | null
    password?: StringFilter<"Utilisateur"> | string
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"Utilisateur"> | Date | string
    Adresse?: AdresseListRelationFilter
    Contact?: ContactListRelationFilter
    Produit?: ProduitListRelationFilter
    Vente?: VenteListRelationFilter
    Achat?: AchatListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    postnom?: SortOrder
    nom_complet?: SortOrderInput | SortOrder
    sexe?: SortOrderInput | SortOrder
    role?: SortOrder
    poste?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Adresse?: AdresseOrderByRelationAggregateInput
    Contact?: ContactOrderByRelationAggregateInput
    Produit?: ProduitOrderByRelationAggregateInput
    Vente?: VenteOrderByRelationAggregateInput
    Achat?: AchatOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    nom?: StringFilter<"Utilisateur"> | string
    postnom?: StringFilter<"Utilisateur"> | string
    nom_complet?: StringNullableFilter<"Utilisateur"> | string | null
    sexe?: EnumSexeNullableFilter<"Utilisateur"> | $Enums.Sexe | null
    role?: EnumRoleFilter<"Utilisateur"> | $Enums.Role
    poste?: EnumPosteNullableFilter<"Utilisateur"> | $Enums.Poste | null
    picture?: StringNullableFilter<"Utilisateur"> | string | null
    password?: StringFilter<"Utilisateur"> | string
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    updatedAt?: DateTimeFilter<"Utilisateur"> | Date | string
    Adresse?: AdresseListRelationFilter
    Contact?: ContactListRelationFilter
    Produit?: ProduitListRelationFilter
    Vente?: VenteListRelationFilter
    Achat?: AchatListRelationFilter
  }, "id" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    postnom?: SortOrder
    nom_complet?: SortOrderInput | SortOrder
    sexe?: SortOrderInput | SortOrder
    role?: SortOrder
    poste?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    postnom?: StringWithAggregatesFilter<"Utilisateur"> | string
    nom_complet?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    sexe?: EnumSexeNullableWithAggregatesFilter<"Utilisateur"> | $Enums.Sexe | null
    role?: EnumRoleWithAggregatesFilter<"Utilisateur"> | $Enums.Role
    poste?: EnumPosteNullableWithAggregatesFilter<"Utilisateur"> | $Enums.Poste | null
    picture?: StringNullableWithAggregatesFilter<"Utilisateur"> | string | null
    password?: StringWithAggregatesFilter<"Utilisateur"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
  }

  export type AdresseWhereInput = {
    AND?: AdresseWhereInput | AdresseWhereInput[]
    OR?: AdresseWhereInput[]
    NOT?: AdresseWhereInput | AdresseWhereInput[]
    id?: IntFilter<"Adresse"> | number
    ville?: StringFilter<"Adresse"> | string
    commune?: StringFilter<"Adresse"> | string
    adresse?: StringFilter<"Adresse"> | string
    utilisateurId?: StringFilter<"Adresse"> | string
    createdAt?: DateTimeFilter<"Adresse"> | Date | string
    updatedAt?: DateTimeFilter<"Adresse"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    Fournisseur?: FournisseurListRelationFilter
  }

  export type AdresseOrderByWithRelationInput = {
    id?: SortOrder
    ville?: SortOrder
    commune?: SortOrder
    adresse?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    Fournisseur?: FournisseurOrderByRelationAggregateInput
  }

  export type AdresseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdresseWhereInput | AdresseWhereInput[]
    OR?: AdresseWhereInput[]
    NOT?: AdresseWhereInput | AdresseWhereInput[]
    ville?: StringFilter<"Adresse"> | string
    commune?: StringFilter<"Adresse"> | string
    adresse?: StringFilter<"Adresse"> | string
    utilisateurId?: StringFilter<"Adresse"> | string
    createdAt?: DateTimeFilter<"Adresse"> | Date | string
    updatedAt?: DateTimeFilter<"Adresse"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    Fournisseur?: FournisseurListRelationFilter
  }, "id">

  export type AdresseOrderByWithAggregationInput = {
    id?: SortOrder
    ville?: SortOrder
    commune?: SortOrder
    adresse?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdresseCountOrderByAggregateInput
    _avg?: AdresseAvgOrderByAggregateInput
    _max?: AdresseMaxOrderByAggregateInput
    _min?: AdresseMinOrderByAggregateInput
    _sum?: AdresseSumOrderByAggregateInput
  }

  export type AdresseScalarWhereWithAggregatesInput = {
    AND?: AdresseScalarWhereWithAggregatesInput | AdresseScalarWhereWithAggregatesInput[]
    OR?: AdresseScalarWhereWithAggregatesInput[]
    NOT?: AdresseScalarWhereWithAggregatesInput | AdresseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Adresse"> | number
    ville?: StringWithAggregatesFilter<"Adresse"> | string
    commune?: StringWithAggregatesFilter<"Adresse"> | string
    adresse?: StringWithAggregatesFilter<"Adresse"> | string
    utilisateurId?: StringWithAggregatesFilter<"Adresse"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Adresse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Adresse"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    tel?: StringFilter<"Contact"> | string
    utilisateurId?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    Fournisseur?: FournisseurListRelationFilter
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    tel?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    Fournisseur?: FournisseurOrderByRelationAggregateInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tel?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    utilisateurId?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    Fournisseur?: FournisseurListRelationFilter
  }, "id" | "tel">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    tel?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    tel?: StringWithAggregatesFilter<"Contact"> | string
    utilisateurId?: StringWithAggregatesFilter<"Contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type FournisseurWhereInput = {
    AND?: FournisseurWhereInput | FournisseurWhereInput[]
    OR?: FournisseurWhereInput[]
    NOT?: FournisseurWhereInput | FournisseurWhereInput[]
    id?: IntFilter<"Fournisseur"> | number
    nom?: StringFilter<"Fournisseur"> | string
    email?: StringFilter<"Fournisseur"> | string
    code_postal?: StringNullableFilter<"Fournisseur"> | string | null
    adresseId?: IntFilter<"Fournisseur"> | number
    contactId?: IntFilter<"Fournisseur"> | number
    createdAt?: DateTimeFilter<"Fournisseur"> | Date | string
    updatedAt?: DateTimeFilter<"Fournisseur"> | Date | string
    adresse?: XOR<AdresseScalarRelationFilter, AdresseWhereInput>
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
    Vente?: VenteListRelationFilter
    Achat?: AchatListRelationFilter
  }

  export type FournisseurOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    code_postal?: SortOrderInput | SortOrder
    adresseId?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adresse?: AdresseOrderByWithRelationInput
    contact?: ContactOrderByWithRelationInput
    Vente?: VenteOrderByRelationAggregateInput
    Achat?: AchatOrderByRelationAggregateInput
  }

  export type FournisseurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: FournisseurWhereInput | FournisseurWhereInput[]
    OR?: FournisseurWhereInput[]
    NOT?: FournisseurWhereInput | FournisseurWhereInput[]
    nom?: StringFilter<"Fournisseur"> | string
    code_postal?: StringNullableFilter<"Fournisseur"> | string | null
    adresseId?: IntFilter<"Fournisseur"> | number
    contactId?: IntFilter<"Fournisseur"> | number
    createdAt?: DateTimeFilter<"Fournisseur"> | Date | string
    updatedAt?: DateTimeFilter<"Fournisseur"> | Date | string
    adresse?: XOR<AdresseScalarRelationFilter, AdresseWhereInput>
    contact?: XOR<ContactScalarRelationFilter, ContactWhereInput>
    Vente?: VenteListRelationFilter
    Achat?: AchatListRelationFilter
  }, "id" | "email">

  export type FournisseurOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    code_postal?: SortOrderInput | SortOrder
    adresseId?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FournisseurCountOrderByAggregateInput
    _avg?: FournisseurAvgOrderByAggregateInput
    _max?: FournisseurMaxOrderByAggregateInput
    _min?: FournisseurMinOrderByAggregateInput
    _sum?: FournisseurSumOrderByAggregateInput
  }

  export type FournisseurScalarWhereWithAggregatesInput = {
    AND?: FournisseurScalarWhereWithAggregatesInput | FournisseurScalarWhereWithAggregatesInput[]
    OR?: FournisseurScalarWhereWithAggregatesInput[]
    NOT?: FournisseurScalarWhereWithAggregatesInput | FournisseurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fournisseur"> | number
    nom?: StringWithAggregatesFilter<"Fournisseur"> | string
    email?: StringWithAggregatesFilter<"Fournisseur"> | string
    code_postal?: StringNullableWithAggregatesFilter<"Fournisseur"> | string | null
    adresseId?: IntWithAggregatesFilter<"Fournisseur"> | number
    contactId?: IntWithAggregatesFilter<"Fournisseur"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Fournisseur"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fournisseur"> | Date | string
  }

  export type TeneurWhereInput = {
    AND?: TeneurWhereInput | TeneurWhereInput[]
    OR?: TeneurWhereInput[]
    NOT?: TeneurWhereInput | TeneurWhereInput[]
    id?: IntFilter<"Teneur"> | number
    valeur?: FloatFilter<"Teneur"> | number
    Produit?: ProduitListRelationFilter
  }

  export type TeneurOrderByWithRelationInput = {
    id?: SortOrder
    valeur?: SortOrder
    Produit?: ProduitOrderByRelationAggregateInput
  }

  export type TeneurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeneurWhereInput | TeneurWhereInput[]
    OR?: TeneurWhereInput[]
    NOT?: TeneurWhereInput | TeneurWhereInput[]
    valeur?: FloatFilter<"Teneur"> | number
    Produit?: ProduitListRelationFilter
  }, "id">

  export type TeneurOrderByWithAggregationInput = {
    id?: SortOrder
    valeur?: SortOrder
    _count?: TeneurCountOrderByAggregateInput
    _avg?: TeneurAvgOrderByAggregateInput
    _max?: TeneurMaxOrderByAggregateInput
    _min?: TeneurMinOrderByAggregateInput
    _sum?: TeneurSumOrderByAggregateInput
  }

  export type TeneurScalarWhereWithAggregatesInput = {
    AND?: TeneurScalarWhereWithAggregatesInput | TeneurScalarWhereWithAggregatesInput[]
    OR?: TeneurScalarWhereWithAggregatesInput[]
    NOT?: TeneurScalarWhereWithAggregatesInput | TeneurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teneur"> | number
    valeur?: FloatWithAggregatesFilter<"Teneur"> | number
  }

  export type ProduitWhereInput = {
    AND?: ProduitWhereInput | ProduitWhereInput[]
    OR?: ProduitWhereInput[]
    NOT?: ProduitWhereInput | ProduitWhereInput[]
    id?: IntFilter<"Produit"> | number
    designation?: StringFilter<"Produit"> | string
    prix?: FloatFilter<"Produit"> | number
    qtte?: IntNullableFilter<"Produit"> | number | null
    description?: StringFilter<"Produit"> | string
    teneurId?: IntFilter<"Produit"> | number
    utilisateurId?: StringFilter<"Produit"> | string
    createdAt?: DateTimeFilter<"Produit"> | Date | string
    updatedAt?: DateTimeFilter<"Produit"> | Date | string
    teneur?: XOR<TeneurScalarRelationFilter, TeneurWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    DetailVente?: DetailVenteListRelationFilter
    DetailAchat?: DetailAchatListRelationFilter
  }

  export type ProduitOrderByWithRelationInput = {
    id?: SortOrder
    designation?: SortOrder
    prix?: SortOrder
    qtte?: SortOrderInput | SortOrder
    description?: SortOrder
    teneurId?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teneur?: TeneurOrderByWithRelationInput
    utilisateur?: UtilisateurOrderByWithRelationInput
    DetailVente?: DetailVenteOrderByRelationAggregateInput
    DetailAchat?: DetailAchatOrderByRelationAggregateInput
  }

  export type ProduitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProduitWhereInput | ProduitWhereInput[]
    OR?: ProduitWhereInput[]
    NOT?: ProduitWhereInput | ProduitWhereInput[]
    designation?: StringFilter<"Produit"> | string
    prix?: FloatFilter<"Produit"> | number
    qtte?: IntNullableFilter<"Produit"> | number | null
    description?: StringFilter<"Produit"> | string
    teneurId?: IntFilter<"Produit"> | number
    utilisateurId?: StringFilter<"Produit"> | string
    createdAt?: DateTimeFilter<"Produit"> | Date | string
    updatedAt?: DateTimeFilter<"Produit"> | Date | string
    teneur?: XOR<TeneurScalarRelationFilter, TeneurWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    DetailVente?: DetailVenteListRelationFilter
    DetailAchat?: DetailAchatListRelationFilter
  }, "id">

  export type ProduitOrderByWithAggregationInput = {
    id?: SortOrder
    designation?: SortOrder
    prix?: SortOrder
    qtte?: SortOrderInput | SortOrder
    description?: SortOrder
    teneurId?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProduitCountOrderByAggregateInput
    _avg?: ProduitAvgOrderByAggregateInput
    _max?: ProduitMaxOrderByAggregateInput
    _min?: ProduitMinOrderByAggregateInput
    _sum?: ProduitSumOrderByAggregateInput
  }

  export type ProduitScalarWhereWithAggregatesInput = {
    AND?: ProduitScalarWhereWithAggregatesInput | ProduitScalarWhereWithAggregatesInput[]
    OR?: ProduitScalarWhereWithAggregatesInput[]
    NOT?: ProduitScalarWhereWithAggregatesInput | ProduitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Produit"> | number
    designation?: StringWithAggregatesFilter<"Produit"> | string
    prix?: FloatWithAggregatesFilter<"Produit"> | number
    qtte?: IntNullableWithAggregatesFilter<"Produit"> | number | null
    description?: StringWithAggregatesFilter<"Produit"> | string
    teneurId?: IntWithAggregatesFilter<"Produit"> | number
    utilisateurId?: StringWithAggregatesFilter<"Produit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Produit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Produit"> | Date | string
  }

  export type DetailVenteWhereInput = {
    AND?: DetailVenteWhereInput | DetailVenteWhereInput[]
    OR?: DetailVenteWhereInput[]
    NOT?: DetailVenteWhereInput | DetailVenteWhereInput[]
    id?: IntFilter<"DetailVente"> | number
    produitId?: IntFilter<"DetailVente"> | number
    qtte?: IntFilter<"DetailVente"> | number
    prixUnitaire?: FloatFilter<"DetailVente"> | number
    prixTotal?: FloatFilter<"DetailVente"> | number
    createdAt?: DateTimeFilter<"DetailVente"> | Date | string
    updatedAt?: DateTimeFilter<"DetailVente"> | Date | string
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
    Vente?: VenteListRelationFilter
  }

  export type DetailVenteOrderByWithRelationInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    produit?: ProduitOrderByWithRelationInput
    Vente?: VenteOrderByRelationAggregateInput
  }

  export type DetailVenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetailVenteWhereInput | DetailVenteWhereInput[]
    OR?: DetailVenteWhereInput[]
    NOT?: DetailVenteWhereInput | DetailVenteWhereInput[]
    produitId?: IntFilter<"DetailVente"> | number
    qtte?: IntFilter<"DetailVente"> | number
    prixUnitaire?: FloatFilter<"DetailVente"> | number
    prixTotal?: FloatFilter<"DetailVente"> | number
    createdAt?: DateTimeFilter<"DetailVente"> | Date | string
    updatedAt?: DateTimeFilter<"DetailVente"> | Date | string
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
    Vente?: VenteListRelationFilter
  }, "id">

  export type DetailVenteOrderByWithAggregationInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DetailVenteCountOrderByAggregateInput
    _avg?: DetailVenteAvgOrderByAggregateInput
    _max?: DetailVenteMaxOrderByAggregateInput
    _min?: DetailVenteMinOrderByAggregateInput
    _sum?: DetailVenteSumOrderByAggregateInput
  }

  export type DetailVenteScalarWhereWithAggregatesInput = {
    AND?: DetailVenteScalarWhereWithAggregatesInput | DetailVenteScalarWhereWithAggregatesInput[]
    OR?: DetailVenteScalarWhereWithAggregatesInput[]
    NOT?: DetailVenteScalarWhereWithAggregatesInput | DetailVenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetailVente"> | number
    produitId?: IntWithAggregatesFilter<"DetailVente"> | number
    qtte?: IntWithAggregatesFilter<"DetailVente"> | number
    prixUnitaire?: FloatWithAggregatesFilter<"DetailVente"> | number
    prixTotal?: FloatWithAggregatesFilter<"DetailVente"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DetailVente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DetailVente"> | Date | string
  }

  export type PaiementWhereInput = {
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    id?: IntFilter<"Paiement"> | number
    montant?: FloatFilter<"Paiement"> | number
    moyen_paiement?: EnumMoyenPaimentFilter<"Paiement"> | $Enums.MoyenPaiment
    createdAt?: DateTimeFilter<"Paiement"> | Date | string
    updatedAt?: DateTimeFilter<"Paiement"> | Date | string
    Vente?: VenteListRelationFilter
    Achat?: AchatListRelationFilter
  }

  export type PaiementOrderByWithRelationInput = {
    id?: SortOrder
    montant?: SortOrder
    moyen_paiement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Vente?: VenteOrderByRelationAggregateInput
    Achat?: AchatOrderByRelationAggregateInput
  }

  export type PaiementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    montant?: FloatFilter<"Paiement"> | number
    moyen_paiement?: EnumMoyenPaimentFilter<"Paiement"> | $Enums.MoyenPaiment
    createdAt?: DateTimeFilter<"Paiement"> | Date | string
    updatedAt?: DateTimeFilter<"Paiement"> | Date | string
    Vente?: VenteListRelationFilter
    Achat?: AchatListRelationFilter
  }, "id">

  export type PaiementOrderByWithAggregationInput = {
    id?: SortOrder
    montant?: SortOrder
    moyen_paiement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaiementCountOrderByAggregateInput
    _avg?: PaiementAvgOrderByAggregateInput
    _max?: PaiementMaxOrderByAggregateInput
    _min?: PaiementMinOrderByAggregateInput
    _sum?: PaiementSumOrderByAggregateInput
  }

  export type PaiementScalarWhereWithAggregatesInput = {
    AND?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    OR?: PaiementScalarWhereWithAggregatesInput[]
    NOT?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paiement"> | number
    montant?: FloatWithAggregatesFilter<"Paiement"> | number
    moyen_paiement?: EnumMoyenPaimentWithAggregatesFilter<"Paiement"> | $Enums.MoyenPaiment
    createdAt?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
  }

  export type VenteWhereInput = {
    AND?: VenteWhereInput | VenteWhereInput[]
    OR?: VenteWhereInput[]
    NOT?: VenteWhereInput | VenteWhereInput[]
    id?: IntFilter<"Vente"> | number
    statut?: StringFilter<"Vente"> | string
    total_ttc?: FloatFilter<"Vente"> | number
    total_ht?: FloatFilter<"Vente"> | number
    remise?: FloatFilter<"Vente"> | number
    detailVenteId?: IntFilter<"Vente"> | number
    paiementId?: IntFilter<"Vente"> | number
    entrepriseId?: IntFilter<"Vente"> | number
    clientId?: StringFilter<"Vente"> | string
    agentId?: StringFilter<"Vente"> | string
    createdAt?: DateTimeFilter<"Vente"> | Date | string
    updatedAt?: DateTimeFilter<"Vente"> | Date | string
    fournisseurId?: IntNullableFilter<"Vente"> | number | null
    detailvente?: XOR<DetailVenteScalarRelationFilter, DetailVenteWhereInput>
    peiement?: XOR<PaiementScalarRelationFilter, PaiementWhereInput>
    entreprise?: XOR<EntrepriseScalarRelationFilter, EntrepriseWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    Fournisseur?: XOR<FournisseurNullableScalarRelationFilter, FournisseurWhereInput> | null
  }

  export type VenteOrderByWithRelationInput = {
    id?: SortOrder
    statut?: SortOrder
    total_ttc?: SortOrder
    total_ht?: SortOrder
    remise?: SortOrder
    detailVenteId?: SortOrder
    paiementId?: SortOrder
    entrepriseId?: SortOrder
    clientId?: SortOrder
    agentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fournisseurId?: SortOrderInput | SortOrder
    detailvente?: DetailVenteOrderByWithRelationInput
    peiement?: PaiementOrderByWithRelationInput
    entreprise?: EntrepriseOrderByWithRelationInput
    utilisateur?: UtilisateurOrderByWithRelationInput
    Fournisseur?: FournisseurOrderByWithRelationInput
  }

  export type VenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VenteWhereInput | VenteWhereInput[]
    OR?: VenteWhereInput[]
    NOT?: VenteWhereInput | VenteWhereInput[]
    statut?: StringFilter<"Vente"> | string
    total_ttc?: FloatFilter<"Vente"> | number
    total_ht?: FloatFilter<"Vente"> | number
    remise?: FloatFilter<"Vente"> | number
    detailVenteId?: IntFilter<"Vente"> | number
    paiementId?: IntFilter<"Vente"> | number
    entrepriseId?: IntFilter<"Vente"> | number
    clientId?: StringFilter<"Vente"> | string
    agentId?: StringFilter<"Vente"> | string
    createdAt?: DateTimeFilter<"Vente"> | Date | string
    updatedAt?: DateTimeFilter<"Vente"> | Date | string
    fournisseurId?: IntNullableFilter<"Vente"> | number | null
    detailvente?: XOR<DetailVenteScalarRelationFilter, DetailVenteWhereInput>
    peiement?: XOR<PaiementScalarRelationFilter, PaiementWhereInput>
    entreprise?: XOR<EntrepriseScalarRelationFilter, EntrepriseWhereInput>
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    Fournisseur?: XOR<FournisseurNullableScalarRelationFilter, FournisseurWhereInput> | null
  }, "id">

  export type VenteOrderByWithAggregationInput = {
    id?: SortOrder
    statut?: SortOrder
    total_ttc?: SortOrder
    total_ht?: SortOrder
    remise?: SortOrder
    detailVenteId?: SortOrder
    paiementId?: SortOrder
    entrepriseId?: SortOrder
    clientId?: SortOrder
    agentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fournisseurId?: SortOrderInput | SortOrder
    _count?: VenteCountOrderByAggregateInput
    _avg?: VenteAvgOrderByAggregateInput
    _max?: VenteMaxOrderByAggregateInput
    _min?: VenteMinOrderByAggregateInput
    _sum?: VenteSumOrderByAggregateInput
  }

  export type VenteScalarWhereWithAggregatesInput = {
    AND?: VenteScalarWhereWithAggregatesInput | VenteScalarWhereWithAggregatesInput[]
    OR?: VenteScalarWhereWithAggregatesInput[]
    NOT?: VenteScalarWhereWithAggregatesInput | VenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vente"> | number
    statut?: StringWithAggregatesFilter<"Vente"> | string
    total_ttc?: FloatWithAggregatesFilter<"Vente"> | number
    total_ht?: FloatWithAggregatesFilter<"Vente"> | number
    remise?: FloatWithAggregatesFilter<"Vente"> | number
    detailVenteId?: IntWithAggregatesFilter<"Vente"> | number
    paiementId?: IntWithAggregatesFilter<"Vente"> | number
    entrepriseId?: IntWithAggregatesFilter<"Vente"> | number
    clientId?: StringWithAggregatesFilter<"Vente"> | string
    agentId?: StringWithAggregatesFilter<"Vente"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vente"> | Date | string
    fournisseurId?: IntNullableWithAggregatesFilter<"Vente"> | number | null
  }

  export type DetailAchatWhereInput = {
    AND?: DetailAchatWhereInput | DetailAchatWhereInput[]
    OR?: DetailAchatWhereInput[]
    NOT?: DetailAchatWhereInput | DetailAchatWhereInput[]
    id?: IntFilter<"DetailAchat"> | number
    produitId?: IntFilter<"DetailAchat"> | number
    qtte?: IntFilter<"DetailAchat"> | number
    prixUnitaire?: FloatFilter<"DetailAchat"> | number
    prixTotal?: FloatFilter<"DetailAchat"> | number
    createdAt?: DateTimeFilter<"DetailAchat"> | Date | string
    updatedAt?: DateTimeFilter<"DetailAchat"> | Date | string
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
    Achat?: AchatListRelationFilter
  }

  export type DetailAchatOrderByWithRelationInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    produit?: ProduitOrderByWithRelationInput
    Achat?: AchatOrderByRelationAggregateInput
  }

  export type DetailAchatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetailAchatWhereInput | DetailAchatWhereInput[]
    OR?: DetailAchatWhereInput[]
    NOT?: DetailAchatWhereInput | DetailAchatWhereInput[]
    produitId?: IntFilter<"DetailAchat"> | number
    qtte?: IntFilter<"DetailAchat"> | number
    prixUnitaire?: FloatFilter<"DetailAchat"> | number
    prixTotal?: FloatFilter<"DetailAchat"> | number
    createdAt?: DateTimeFilter<"DetailAchat"> | Date | string
    updatedAt?: DateTimeFilter<"DetailAchat"> | Date | string
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
    Achat?: AchatListRelationFilter
  }, "id">

  export type DetailAchatOrderByWithAggregationInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DetailAchatCountOrderByAggregateInput
    _avg?: DetailAchatAvgOrderByAggregateInput
    _max?: DetailAchatMaxOrderByAggregateInput
    _min?: DetailAchatMinOrderByAggregateInput
    _sum?: DetailAchatSumOrderByAggregateInput
  }

  export type DetailAchatScalarWhereWithAggregatesInput = {
    AND?: DetailAchatScalarWhereWithAggregatesInput | DetailAchatScalarWhereWithAggregatesInput[]
    OR?: DetailAchatScalarWhereWithAggregatesInput[]
    NOT?: DetailAchatScalarWhereWithAggregatesInput | DetailAchatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetailAchat"> | number
    produitId?: IntWithAggregatesFilter<"DetailAchat"> | number
    qtte?: IntWithAggregatesFilter<"DetailAchat"> | number
    prixUnitaire?: FloatWithAggregatesFilter<"DetailAchat"> | number
    prixTotal?: FloatWithAggregatesFilter<"DetailAchat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DetailAchat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DetailAchat"> | Date | string
  }

  export type AchatWhereInput = {
    AND?: AchatWhereInput | AchatWhereInput[]
    OR?: AchatWhereInput[]
    NOT?: AchatWhereInput | AchatWhereInput[]
    id?: IntFilter<"Achat"> | number
    statut?: StringFilter<"Achat"> | string
    fournisseurId?: IntFilter<"Achat"> | number
    total?: FloatFilter<"Achat"> | number
    detailAchatId?: IntFilter<"Achat"> | number
    agentId?: StringFilter<"Achat"> | string
    paiementId?: IntFilter<"Achat"> | number
    createdAt?: DateTimeFilter<"Achat"> | Date | string
    updatedAt?: DateTimeFilter<"Achat"> | Date | string
    fournisseur?: XOR<FournisseurScalarRelationFilter, FournisseurWhereInput>
    detailAchat?: XOR<DetailAchatScalarRelationFilter, DetailAchatWhereInput>
    agent?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    paiement?: XOR<PaiementScalarRelationFilter, PaiementWhereInput>
  }

  export type AchatOrderByWithRelationInput = {
    id?: SortOrder
    statut?: SortOrder
    fournisseurId?: SortOrder
    total?: SortOrder
    detailAchatId?: SortOrder
    agentId?: SortOrder
    paiementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fournisseur?: FournisseurOrderByWithRelationInput
    detailAchat?: DetailAchatOrderByWithRelationInput
    agent?: UtilisateurOrderByWithRelationInput
    paiement?: PaiementOrderByWithRelationInput
  }

  export type AchatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AchatWhereInput | AchatWhereInput[]
    OR?: AchatWhereInput[]
    NOT?: AchatWhereInput | AchatWhereInput[]
    statut?: StringFilter<"Achat"> | string
    fournisseurId?: IntFilter<"Achat"> | number
    total?: FloatFilter<"Achat"> | number
    detailAchatId?: IntFilter<"Achat"> | number
    agentId?: StringFilter<"Achat"> | string
    paiementId?: IntFilter<"Achat"> | number
    createdAt?: DateTimeFilter<"Achat"> | Date | string
    updatedAt?: DateTimeFilter<"Achat"> | Date | string
    fournisseur?: XOR<FournisseurScalarRelationFilter, FournisseurWhereInput>
    detailAchat?: XOR<DetailAchatScalarRelationFilter, DetailAchatWhereInput>
    agent?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    paiement?: XOR<PaiementScalarRelationFilter, PaiementWhereInput>
  }, "id">

  export type AchatOrderByWithAggregationInput = {
    id?: SortOrder
    statut?: SortOrder
    fournisseurId?: SortOrder
    total?: SortOrder
    detailAchatId?: SortOrder
    agentId?: SortOrder
    paiementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AchatCountOrderByAggregateInput
    _avg?: AchatAvgOrderByAggregateInput
    _max?: AchatMaxOrderByAggregateInput
    _min?: AchatMinOrderByAggregateInput
    _sum?: AchatSumOrderByAggregateInput
  }

  export type AchatScalarWhereWithAggregatesInput = {
    AND?: AchatScalarWhereWithAggregatesInput | AchatScalarWhereWithAggregatesInput[]
    OR?: AchatScalarWhereWithAggregatesInput[]
    NOT?: AchatScalarWhereWithAggregatesInput | AchatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Achat"> | number
    statut?: StringWithAggregatesFilter<"Achat"> | string
    fournisseurId?: IntWithAggregatesFilter<"Achat"> | number
    total?: FloatWithAggregatesFilter<"Achat"> | number
    detailAchatId?: IntWithAggregatesFilter<"Achat"> | number
    agentId?: StringWithAggregatesFilter<"Achat"> | string
    paiementId?: IntWithAggregatesFilter<"Achat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Achat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Achat"> | Date | string
  }

  export type EntrepriseCreateInput = {
    nom: string
    encronyme: string
    code_postale: string
    adresse: string
    tel: string
    site?: string | null
    email: string
    decription?: string | null
    logo?: string | null
    Vente?: VenteCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUncheckedCreateInput = {
    id?: number
    nom: string
    encronyme: string
    code_postale: string
    adresse: string
    tel: string
    site?: string | null
    email: string
    decription?: string | null
    logo?: string | null
    Vente?: VenteUncheckedCreateNestedManyWithoutEntrepriseInput
  }

  export type EntrepriseUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    encronyme?: StringFieldUpdateOperationsInput | string
    code_postale?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    decription?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    Vente?: VenteUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    encronyme?: StringFieldUpdateOperationsInput | string
    code_postale?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    decription?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    Vente?: VenteUncheckedUpdateManyWithoutEntrepriseNestedInput
  }

  export type EntrepriseCreateManyInput = {
    id?: number
    nom: string
    encronyme: string
    code_postale: string
    adresse: string
    tel: string
    site?: string | null
    email: string
    decription?: string | null
    logo?: string | null
  }

  export type EntrepriseUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    encronyme?: StringFieldUpdateOperationsInput | string
    code_postale?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    decription?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntrepriseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    encronyme?: StringFieldUpdateOperationsInput | string
    code_postale?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    decription?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UtilisateurCreateInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adresse?: AdresseCreateNestedManyWithoutUtilisateurInput
    Contact?: ContactCreateNestedManyWithoutUtilisateurInput
    Produit?: ProduitCreateNestedManyWithoutUtilisateurInput
    Vente?: VenteCreateNestedManyWithoutUtilisateurInput
    Achat?: AchatCreateNestedManyWithoutAgentInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adresse?: AdresseUncheckedCreateNestedManyWithoutUtilisateurInput
    Contact?: ContactUncheckedCreateNestedManyWithoutUtilisateurInput
    Produit?: ProduitUncheckedCreateNestedManyWithoutUtilisateurInput
    Vente?: VenteUncheckedCreateNestedManyWithoutUtilisateurInput
    Achat?: AchatUncheckedCreateNestedManyWithoutAgentInput
  }

  export type UtilisateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adresse?: AdresseUpdateManyWithoutUtilisateurNestedInput
    Contact?: ContactUpdateManyWithoutUtilisateurNestedInput
    Produit?: ProduitUpdateManyWithoutUtilisateurNestedInput
    Vente?: VenteUpdateManyWithoutUtilisateurNestedInput
    Achat?: AchatUpdateManyWithoutAgentNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adresse?: AdresseUncheckedUpdateManyWithoutUtilisateurNestedInput
    Contact?: ContactUncheckedUpdateManyWithoutUtilisateurNestedInput
    Produit?: ProduitUncheckedUpdateManyWithoutUtilisateurNestedInput
    Vente?: VenteUncheckedUpdateManyWithoutUtilisateurNestedInput
    Achat?: AchatUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UtilisateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdresseCreateInput = {
    ville: string
    commune: string
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutAdresseInput
    Fournisseur?: FournisseurCreateNestedManyWithoutAdresseInput
  }

  export type AdresseUncheckedCreateInput = {
    id?: number
    ville: string
    commune: string
    adresse: string
    utilisateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Fournisseur?: FournisseurUncheckedCreateNestedManyWithoutAdresseInput
  }

  export type AdresseUpdateInput = {
    ville?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutAdresseNestedInput
    Fournisseur?: FournisseurUpdateManyWithoutAdresseNestedInput
  }

  export type AdresseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ville?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Fournisseur?: FournisseurUncheckedUpdateManyWithoutAdresseNestedInput
  }

  export type AdresseCreateManyInput = {
    id?: number
    ville: string
    commune: string
    adresse: string
    utilisateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdresseUpdateManyMutationInput = {
    ville?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdresseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ville?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    tel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutContactInput
    Fournisseur?: FournisseurCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    tel: string
    utilisateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Fournisseur?: FournisseurUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactUpdateInput = {
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutContactNestedInput
    Fournisseur?: FournisseurUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tel?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Fournisseur?: FournisseurUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactCreateManyInput = {
    id?: number
    tel: string
    utilisateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tel?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FournisseurCreateInput = {
    nom: string
    email: string
    code_postal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    adresse: AdresseCreateNestedOneWithoutFournisseurInput
    contact: ContactCreateNestedOneWithoutFournisseurInput
    Vente?: VenteCreateNestedManyWithoutFournisseurInput
    Achat?: AchatCreateNestedManyWithoutFournisseurInput
  }

  export type FournisseurUncheckedCreateInput = {
    id?: number
    nom: string
    email: string
    code_postal?: string | null
    adresseId: number
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Vente?: VenteUncheckedCreateNestedManyWithoutFournisseurInput
    Achat?: AchatUncheckedCreateNestedManyWithoutFournisseurInput
  }

  export type FournisseurUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: AdresseUpdateOneRequiredWithoutFournisseurNestedInput
    contact?: ContactUpdateOneRequiredWithoutFournisseurNestedInput
    Vente?: VenteUpdateManyWithoutFournisseurNestedInput
    Achat?: AchatUpdateManyWithoutFournisseurNestedInput
  }

  export type FournisseurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    adresseId?: IntFieldUpdateOperationsInput | number
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vente?: VenteUncheckedUpdateManyWithoutFournisseurNestedInput
    Achat?: AchatUncheckedUpdateManyWithoutFournisseurNestedInput
  }

  export type FournisseurCreateManyInput = {
    id?: number
    nom: string
    email: string
    code_postal?: string | null
    adresseId: number
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FournisseurUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FournisseurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    adresseId?: IntFieldUpdateOperationsInput | number
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeneurCreateInput = {
    valeur: number
    Produit?: ProduitCreateNestedManyWithoutTeneurInput
  }

  export type TeneurUncheckedCreateInput = {
    id?: number
    valeur: number
    Produit?: ProduitUncheckedCreateNestedManyWithoutTeneurInput
  }

  export type TeneurUpdateInput = {
    valeur?: FloatFieldUpdateOperationsInput | number
    Produit?: ProduitUpdateManyWithoutTeneurNestedInput
  }

  export type TeneurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valeur?: FloatFieldUpdateOperationsInput | number
    Produit?: ProduitUncheckedUpdateManyWithoutTeneurNestedInput
  }

  export type TeneurCreateManyInput = {
    id?: number
    valeur: number
  }

  export type TeneurUpdateManyMutationInput = {
    valeur?: FloatFieldUpdateOperationsInput | number
  }

  export type TeneurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    valeur?: FloatFieldUpdateOperationsInput | number
  }

  export type ProduitCreateInput = {
    designation: string
    prix: number
    qtte?: number | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teneur: TeneurCreateNestedOneWithoutProduitInput
    utilisateur: UtilisateurCreateNestedOneWithoutProduitInput
    DetailVente?: DetailVenteCreateNestedManyWithoutProduitInput
    DetailAchat?: DetailAchatCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateInput = {
    id?: number
    designation: string
    prix: number
    qtte?: number | null
    description: string
    teneurId: number
    utilisateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    DetailVente?: DetailVenteUncheckedCreateNestedManyWithoutProduitInput
    DetailAchat?: DetailAchatUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitUpdateInput = {
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teneur?: TeneurUpdateOneRequiredWithoutProduitNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutProduitNestedInput
    DetailVente?: DetailVenteUpdateManyWithoutProduitNestedInput
    DetailAchat?: DetailAchatUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    teneurId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetailVente?: DetailVenteUncheckedUpdateManyWithoutProduitNestedInput
    DetailAchat?: DetailAchatUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type ProduitCreateManyInput = {
    id?: number
    designation: string
    prix: number
    qtte?: number | null
    description: string
    teneurId: number
    utilisateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProduitUpdateManyMutationInput = {
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    teneurId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailVenteCreateInput = {
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    produit: ProduitCreateNestedOneWithoutDetailVenteInput
    Vente?: VenteCreateNestedManyWithoutDetailventeInput
  }

  export type DetailVenteUncheckedCreateInput = {
    id?: number
    produitId: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Vente?: VenteUncheckedCreateNestedManyWithoutDetailventeInput
  }

  export type DetailVenteUpdateInput = {
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produit?: ProduitUpdateOneRequiredWithoutDetailVenteNestedInput
    Vente?: VenteUpdateManyWithoutDetailventeNestedInput
  }

  export type DetailVenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produitId?: IntFieldUpdateOperationsInput | number
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vente?: VenteUncheckedUpdateManyWithoutDetailventeNestedInput
  }

  export type DetailVenteCreateManyInput = {
    id?: number
    produitId: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DetailVenteUpdateManyMutationInput = {
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailVenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produitId?: IntFieldUpdateOperationsInput | number
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateInput = {
    montant: number
    moyen_paiement?: $Enums.MoyenPaiment
    createdAt?: Date | string
    updatedAt?: Date | string
    Vente?: VenteCreateNestedManyWithoutPeiementInput
    Achat?: AchatCreateNestedManyWithoutPaiementInput
  }

  export type PaiementUncheckedCreateInput = {
    id?: number
    montant: number
    moyen_paiement?: $Enums.MoyenPaiment
    createdAt?: Date | string
    updatedAt?: Date | string
    Vente?: VenteUncheckedCreateNestedManyWithoutPeiementInput
    Achat?: AchatUncheckedCreateNestedManyWithoutPaiementInput
  }

  export type PaiementUpdateInput = {
    montant?: FloatFieldUpdateOperationsInput | number
    moyen_paiement?: EnumMoyenPaimentFieldUpdateOperationsInput | $Enums.MoyenPaiment
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vente?: VenteUpdateManyWithoutPeiementNestedInput
    Achat?: AchatUpdateManyWithoutPaiementNestedInput
  }

  export type PaiementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    moyen_paiement?: EnumMoyenPaimentFieldUpdateOperationsInput | $Enums.MoyenPaiment
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vente?: VenteUncheckedUpdateManyWithoutPeiementNestedInput
    Achat?: AchatUncheckedUpdateManyWithoutPaiementNestedInput
  }

  export type PaiementCreateManyInput = {
    id?: number
    montant: number
    moyen_paiement?: $Enums.MoyenPaiment
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaiementUpdateManyMutationInput = {
    montant?: FloatFieldUpdateOperationsInput | number
    moyen_paiement?: EnumMoyenPaimentFieldUpdateOperationsInput | $Enums.MoyenPaiment
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    moyen_paiement?: EnumMoyenPaimentFieldUpdateOperationsInput | $Enums.MoyenPaiment
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenteCreateInput = {
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    detailvente: DetailVenteCreateNestedOneWithoutVenteInput
    peiement: PaiementCreateNestedOneWithoutVenteInput
    entreprise: EntrepriseCreateNestedOneWithoutVenteInput
    utilisateur: UtilisateurCreateNestedOneWithoutVenteInput
    Fournisseur?: FournisseurCreateNestedOneWithoutVenteInput
  }

  export type VenteUncheckedCreateInput = {
    id?: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    detailVenteId: number
    paiementId: number
    entrepriseId: number
    clientId: string
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseurId?: number | null
  }

  export type VenteUpdateInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailvente?: DetailVenteUpdateOneRequiredWithoutVenteNestedInput
    peiement?: PaiementUpdateOneRequiredWithoutVenteNestedInput
    entreprise?: EntrepriseUpdateOneRequiredWithoutVenteNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutVenteNestedInput
    Fournisseur?: FournisseurUpdateOneWithoutVenteNestedInput
  }

  export type VenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    detailVenteId?: IntFieldUpdateOperationsInput | number
    paiementId?: IntFieldUpdateOperationsInput | number
    entrepriseId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VenteCreateManyInput = {
    id?: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    detailVenteId: number
    paiementId: number
    entrepriseId: number
    clientId: string
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseurId?: number | null
  }

  export type VenteUpdateManyMutationInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    detailVenteId?: IntFieldUpdateOperationsInput | number
    paiementId?: IntFieldUpdateOperationsInput | number
    entrepriseId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DetailAchatCreateInput = {
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    produit: ProduitCreateNestedOneWithoutDetailAchatInput
    Achat?: AchatCreateNestedManyWithoutDetailAchatInput
  }

  export type DetailAchatUncheckedCreateInput = {
    id?: number
    produitId: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Achat?: AchatUncheckedCreateNestedManyWithoutDetailAchatInput
  }

  export type DetailAchatUpdateInput = {
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produit?: ProduitUpdateOneRequiredWithoutDetailAchatNestedInput
    Achat?: AchatUpdateManyWithoutDetailAchatNestedInput
  }

  export type DetailAchatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produitId?: IntFieldUpdateOperationsInput | number
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Achat?: AchatUncheckedUpdateManyWithoutDetailAchatNestedInput
  }

  export type DetailAchatCreateManyInput = {
    id?: number
    produitId: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DetailAchatUpdateManyMutationInput = {
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailAchatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produitId?: IntFieldUpdateOperationsInput | number
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchatCreateInput = {
    statut: string
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseur: FournisseurCreateNestedOneWithoutAchatInput
    detailAchat: DetailAchatCreateNestedOneWithoutAchatInput
    agent: UtilisateurCreateNestedOneWithoutAchatInput
    paiement: PaiementCreateNestedOneWithoutAchatInput
  }

  export type AchatUncheckedCreateInput = {
    id?: number
    statut: string
    fournisseurId: number
    total: number
    detailAchatId: number
    agentId: string
    paiementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchatUpdateInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseur?: FournisseurUpdateOneRequiredWithoutAchatNestedInput
    detailAchat?: DetailAchatUpdateOneRequiredWithoutAchatNestedInput
    agent?: UtilisateurUpdateOneRequiredWithoutAchatNestedInput
    paiement?: PaiementUpdateOneRequiredWithoutAchatNestedInput
  }

  export type AchatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    fournisseurId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    detailAchatId?: IntFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    paiementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchatCreateManyInput = {
    id?: number
    statut: string
    fournisseurId: number
    total: number
    detailAchatId: number
    agentId: string
    paiementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchatUpdateManyMutationInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    fournisseurId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    detailAchatId?: IntFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    paiementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VenteListRelationFilter = {
    every?: VenteWhereInput
    some?: VenteWhereInput
    none?: VenteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntrepriseCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    encronyme?: SortOrder
    code_postale?: SortOrder
    adresse?: SortOrder
    tel?: SortOrder
    site?: SortOrder
    email?: SortOrder
    decription?: SortOrder
    logo?: SortOrder
  }

  export type EntrepriseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EntrepriseMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    encronyme?: SortOrder
    code_postale?: SortOrder
    adresse?: SortOrder
    tel?: SortOrder
    site?: SortOrder
    email?: SortOrder
    decription?: SortOrder
    logo?: SortOrder
  }

  export type EntrepriseMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    encronyme?: SortOrder
    code_postale?: SortOrder
    adresse?: SortOrder
    tel?: SortOrder
    site?: SortOrder
    email?: SortOrder
    decription?: SortOrder
    logo?: SortOrder
  }

  export type EntrepriseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSexeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexe | EnumSexeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexeNullableFilter<$PrismaModel> | $Enums.Sexe | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumPosteNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Poste | EnumPosteFieldRefInput<$PrismaModel> | null
    in?: $Enums.Poste[] | ListEnumPosteFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Poste[] | ListEnumPosteFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPosteNullableFilter<$PrismaModel> | $Enums.Poste | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdresseListRelationFilter = {
    every?: AdresseWhereInput
    some?: AdresseWhereInput
    none?: AdresseWhereInput
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type ProduitListRelationFilter = {
    every?: ProduitWhereInput
    some?: ProduitWhereInput
    none?: ProduitWhereInput
  }

  export type AchatListRelationFilter = {
    every?: AchatWhereInput
    some?: AchatWhereInput
    none?: AchatWhereInput
  }

  export type AdresseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProduitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AchatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    postnom?: SortOrder
    nom_complet?: SortOrder
    sexe?: SortOrder
    role?: SortOrder
    poste?: SortOrder
    picture?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    postnom?: SortOrder
    nom_complet?: SortOrder
    sexe?: SortOrder
    role?: SortOrder
    poste?: SortOrder
    picture?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nom?: SortOrder
    postnom?: SortOrder
    nom_complet?: SortOrder
    sexe?: SortOrder
    role?: SortOrder
    poste?: SortOrder
    picture?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSexeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexe | EnumSexeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sexe | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexeNullableFilter<$PrismaModel>
    _max?: NestedEnumSexeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumPosteNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Poste | EnumPosteFieldRefInput<$PrismaModel> | null
    in?: $Enums.Poste[] | ListEnumPosteFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Poste[] | ListEnumPosteFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPosteNullableWithAggregatesFilter<$PrismaModel> | $Enums.Poste | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPosteNullableFilter<$PrismaModel>
    _max?: NestedEnumPosteNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type FournisseurListRelationFilter = {
    every?: FournisseurWhereInput
    some?: FournisseurWhereInput
    none?: FournisseurWhereInput
  }

  export type FournisseurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdresseCountOrderByAggregateInput = {
    id?: SortOrder
    ville?: SortOrder
    commune?: SortOrder
    adresse?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdresseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdresseMaxOrderByAggregateInput = {
    id?: SortOrder
    ville?: SortOrder
    commune?: SortOrder
    adresse?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdresseMinOrderByAggregateInput = {
    id?: SortOrder
    ville?: SortOrder
    commune?: SortOrder
    adresse?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdresseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    tel?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    tel?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    tel?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdresseScalarRelationFilter = {
    is?: AdresseWhereInput
    isNot?: AdresseWhereInput
  }

  export type ContactScalarRelationFilter = {
    is?: ContactWhereInput
    isNot?: ContactWhereInput
  }

  export type FournisseurCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    code_postal?: SortOrder
    adresseId?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FournisseurAvgOrderByAggregateInput = {
    id?: SortOrder
    adresseId?: SortOrder
    contactId?: SortOrder
  }

  export type FournisseurMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    code_postal?: SortOrder
    adresseId?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FournisseurMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    code_postal?: SortOrder
    adresseId?: SortOrder
    contactId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FournisseurSumOrderByAggregateInput = {
    id?: SortOrder
    adresseId?: SortOrder
    contactId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TeneurCountOrderByAggregateInput = {
    id?: SortOrder
    valeur?: SortOrder
  }

  export type TeneurAvgOrderByAggregateInput = {
    id?: SortOrder
    valeur?: SortOrder
  }

  export type TeneurMaxOrderByAggregateInput = {
    id?: SortOrder
    valeur?: SortOrder
  }

  export type TeneurMinOrderByAggregateInput = {
    id?: SortOrder
    valeur?: SortOrder
  }

  export type TeneurSumOrderByAggregateInput = {
    id?: SortOrder
    valeur?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TeneurScalarRelationFilter = {
    is?: TeneurWhereInput
    isNot?: TeneurWhereInput
  }

  export type DetailVenteListRelationFilter = {
    every?: DetailVenteWhereInput
    some?: DetailVenteWhereInput
    none?: DetailVenteWhereInput
  }

  export type DetailAchatListRelationFilter = {
    every?: DetailAchatWhereInput
    some?: DetailAchatWhereInput
    none?: DetailAchatWhereInput
  }

  export type DetailVenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DetailAchatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProduitCountOrderByAggregateInput = {
    id?: SortOrder
    designation?: SortOrder
    prix?: SortOrder
    qtte?: SortOrder
    description?: SortOrder
    teneurId?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProduitAvgOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
    qtte?: SortOrder
    teneurId?: SortOrder
  }

  export type ProduitMaxOrderByAggregateInput = {
    id?: SortOrder
    designation?: SortOrder
    prix?: SortOrder
    qtte?: SortOrder
    description?: SortOrder
    teneurId?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProduitMinOrderByAggregateInput = {
    id?: SortOrder
    designation?: SortOrder
    prix?: SortOrder
    qtte?: SortOrder
    description?: SortOrder
    teneurId?: SortOrder
    utilisateurId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProduitSumOrderByAggregateInput = {
    id?: SortOrder
    prix?: SortOrder
    qtte?: SortOrder
    teneurId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProduitScalarRelationFilter = {
    is?: ProduitWhereInput
    isNot?: ProduitWhereInput
  }

  export type DetailVenteCountOrderByAggregateInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DetailVenteAvgOrderByAggregateInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
  }

  export type DetailVenteMaxOrderByAggregateInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DetailVenteMinOrderByAggregateInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DetailVenteSumOrderByAggregateInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
  }

  export type EnumMoyenPaimentFilter<$PrismaModel = never> = {
    equals?: $Enums.MoyenPaiment | EnumMoyenPaimentFieldRefInput<$PrismaModel>
    in?: $Enums.MoyenPaiment[] | ListEnumMoyenPaimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.MoyenPaiment[] | ListEnumMoyenPaimentFieldRefInput<$PrismaModel>
    not?: NestedEnumMoyenPaimentFilter<$PrismaModel> | $Enums.MoyenPaiment
  }

  export type PaiementCountOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    moyen_paiement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaiementAvgOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
  }

  export type PaiementMaxOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    moyen_paiement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaiementMinOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    moyen_paiement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaiementSumOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
  }

  export type EnumMoyenPaimentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MoyenPaiment | EnumMoyenPaimentFieldRefInput<$PrismaModel>
    in?: $Enums.MoyenPaiment[] | ListEnumMoyenPaimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.MoyenPaiment[] | ListEnumMoyenPaimentFieldRefInput<$PrismaModel>
    not?: NestedEnumMoyenPaimentWithAggregatesFilter<$PrismaModel> | $Enums.MoyenPaiment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoyenPaimentFilter<$PrismaModel>
    _max?: NestedEnumMoyenPaimentFilter<$PrismaModel>
  }

  export type DetailVenteScalarRelationFilter = {
    is?: DetailVenteWhereInput
    isNot?: DetailVenteWhereInput
  }

  export type PaiementScalarRelationFilter = {
    is?: PaiementWhereInput
    isNot?: PaiementWhereInput
  }

  export type EntrepriseScalarRelationFilter = {
    is?: EntrepriseWhereInput
    isNot?: EntrepriseWhereInput
  }

  export type FournisseurNullableScalarRelationFilter = {
    is?: FournisseurWhereInput | null
    isNot?: FournisseurWhereInput | null
  }

  export type VenteCountOrderByAggregateInput = {
    id?: SortOrder
    statut?: SortOrder
    total_ttc?: SortOrder
    total_ht?: SortOrder
    remise?: SortOrder
    detailVenteId?: SortOrder
    paiementId?: SortOrder
    entrepriseId?: SortOrder
    clientId?: SortOrder
    agentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fournisseurId?: SortOrder
  }

  export type VenteAvgOrderByAggregateInput = {
    id?: SortOrder
    total_ttc?: SortOrder
    total_ht?: SortOrder
    remise?: SortOrder
    detailVenteId?: SortOrder
    paiementId?: SortOrder
    entrepriseId?: SortOrder
    fournisseurId?: SortOrder
  }

  export type VenteMaxOrderByAggregateInput = {
    id?: SortOrder
    statut?: SortOrder
    total_ttc?: SortOrder
    total_ht?: SortOrder
    remise?: SortOrder
    detailVenteId?: SortOrder
    paiementId?: SortOrder
    entrepriseId?: SortOrder
    clientId?: SortOrder
    agentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fournisseurId?: SortOrder
  }

  export type VenteMinOrderByAggregateInput = {
    id?: SortOrder
    statut?: SortOrder
    total_ttc?: SortOrder
    total_ht?: SortOrder
    remise?: SortOrder
    detailVenteId?: SortOrder
    paiementId?: SortOrder
    entrepriseId?: SortOrder
    clientId?: SortOrder
    agentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fournisseurId?: SortOrder
  }

  export type VenteSumOrderByAggregateInput = {
    id?: SortOrder
    total_ttc?: SortOrder
    total_ht?: SortOrder
    remise?: SortOrder
    detailVenteId?: SortOrder
    paiementId?: SortOrder
    entrepriseId?: SortOrder
    fournisseurId?: SortOrder
  }

  export type DetailAchatCountOrderByAggregateInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DetailAchatAvgOrderByAggregateInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
  }

  export type DetailAchatMaxOrderByAggregateInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DetailAchatMinOrderByAggregateInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DetailAchatSumOrderByAggregateInput = {
    id?: SortOrder
    produitId?: SortOrder
    qtte?: SortOrder
    prixUnitaire?: SortOrder
    prixTotal?: SortOrder
  }

  export type FournisseurScalarRelationFilter = {
    is?: FournisseurWhereInput
    isNot?: FournisseurWhereInput
  }

  export type DetailAchatScalarRelationFilter = {
    is?: DetailAchatWhereInput
    isNot?: DetailAchatWhereInput
  }

  export type AchatCountOrderByAggregateInput = {
    id?: SortOrder
    statut?: SortOrder
    fournisseurId?: SortOrder
    total?: SortOrder
    detailAchatId?: SortOrder
    agentId?: SortOrder
    paiementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchatAvgOrderByAggregateInput = {
    id?: SortOrder
    fournisseurId?: SortOrder
    total?: SortOrder
    detailAchatId?: SortOrder
    paiementId?: SortOrder
  }

  export type AchatMaxOrderByAggregateInput = {
    id?: SortOrder
    statut?: SortOrder
    fournisseurId?: SortOrder
    total?: SortOrder
    detailAchatId?: SortOrder
    agentId?: SortOrder
    paiementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchatMinOrderByAggregateInput = {
    id?: SortOrder
    statut?: SortOrder
    fournisseurId?: SortOrder
    total?: SortOrder
    detailAchatId?: SortOrder
    agentId?: SortOrder
    paiementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchatSumOrderByAggregateInput = {
    id?: SortOrder
    fournisseurId?: SortOrder
    total?: SortOrder
    detailAchatId?: SortOrder
    paiementId?: SortOrder
  }

  export type VenteCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<VenteCreateWithoutEntrepriseInput, VenteUncheckedCreateWithoutEntrepriseInput> | VenteCreateWithoutEntrepriseInput[] | VenteUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutEntrepriseInput | VenteCreateOrConnectWithoutEntrepriseInput[]
    createMany?: VenteCreateManyEntrepriseInputEnvelope
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
  }

  export type VenteUncheckedCreateNestedManyWithoutEntrepriseInput = {
    create?: XOR<VenteCreateWithoutEntrepriseInput, VenteUncheckedCreateWithoutEntrepriseInput> | VenteCreateWithoutEntrepriseInput[] | VenteUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutEntrepriseInput | VenteCreateOrConnectWithoutEntrepriseInput[]
    createMany?: VenteCreateManyEntrepriseInputEnvelope
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VenteUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<VenteCreateWithoutEntrepriseInput, VenteUncheckedCreateWithoutEntrepriseInput> | VenteCreateWithoutEntrepriseInput[] | VenteUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutEntrepriseInput | VenteCreateOrConnectWithoutEntrepriseInput[]
    upsert?: VenteUpsertWithWhereUniqueWithoutEntrepriseInput | VenteUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: VenteCreateManyEntrepriseInputEnvelope
    set?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    disconnect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    delete?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    update?: VenteUpdateWithWhereUniqueWithoutEntrepriseInput | VenteUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: VenteUpdateManyWithWhereWithoutEntrepriseInput | VenteUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: VenteScalarWhereInput | VenteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VenteUncheckedUpdateManyWithoutEntrepriseNestedInput = {
    create?: XOR<VenteCreateWithoutEntrepriseInput, VenteUncheckedCreateWithoutEntrepriseInput> | VenteCreateWithoutEntrepriseInput[] | VenteUncheckedCreateWithoutEntrepriseInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutEntrepriseInput | VenteCreateOrConnectWithoutEntrepriseInput[]
    upsert?: VenteUpsertWithWhereUniqueWithoutEntrepriseInput | VenteUpsertWithWhereUniqueWithoutEntrepriseInput[]
    createMany?: VenteCreateManyEntrepriseInputEnvelope
    set?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    disconnect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    delete?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    update?: VenteUpdateWithWhereUniqueWithoutEntrepriseInput | VenteUpdateWithWhereUniqueWithoutEntrepriseInput[]
    updateMany?: VenteUpdateManyWithWhereWithoutEntrepriseInput | VenteUpdateManyWithWhereWithoutEntrepriseInput[]
    deleteMany?: VenteScalarWhereInput | VenteScalarWhereInput[]
  }

  export type AdresseCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<AdresseCreateWithoutUtilisateurInput, AdresseUncheckedCreateWithoutUtilisateurInput> | AdresseCreateWithoutUtilisateurInput[] | AdresseUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: AdresseCreateOrConnectWithoutUtilisateurInput | AdresseCreateOrConnectWithoutUtilisateurInput[]
    createMany?: AdresseCreateManyUtilisateurInputEnvelope
    connect?: AdresseWhereUniqueInput | AdresseWhereUniqueInput[]
  }

  export type ContactCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<ContactCreateWithoutUtilisateurInput, ContactUncheckedCreateWithoutUtilisateurInput> | ContactCreateWithoutUtilisateurInput[] | ContactUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUtilisateurInput | ContactCreateOrConnectWithoutUtilisateurInput[]
    createMany?: ContactCreateManyUtilisateurInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type ProduitCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<ProduitCreateWithoutUtilisateurInput, ProduitUncheckedCreateWithoutUtilisateurInput> | ProduitCreateWithoutUtilisateurInput[] | ProduitUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutUtilisateurInput | ProduitCreateOrConnectWithoutUtilisateurInput[]
    createMany?: ProduitCreateManyUtilisateurInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type VenteCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<VenteCreateWithoutUtilisateurInput, VenteUncheckedCreateWithoutUtilisateurInput> | VenteCreateWithoutUtilisateurInput[] | VenteUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutUtilisateurInput | VenteCreateOrConnectWithoutUtilisateurInput[]
    createMany?: VenteCreateManyUtilisateurInputEnvelope
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
  }

  export type AchatCreateNestedManyWithoutAgentInput = {
    create?: XOR<AchatCreateWithoutAgentInput, AchatUncheckedCreateWithoutAgentInput> | AchatCreateWithoutAgentInput[] | AchatUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutAgentInput | AchatCreateOrConnectWithoutAgentInput[]
    createMany?: AchatCreateManyAgentInputEnvelope
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
  }

  export type AdresseUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<AdresseCreateWithoutUtilisateurInput, AdresseUncheckedCreateWithoutUtilisateurInput> | AdresseCreateWithoutUtilisateurInput[] | AdresseUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: AdresseCreateOrConnectWithoutUtilisateurInput | AdresseCreateOrConnectWithoutUtilisateurInput[]
    createMany?: AdresseCreateManyUtilisateurInputEnvelope
    connect?: AdresseWhereUniqueInput | AdresseWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<ContactCreateWithoutUtilisateurInput, ContactUncheckedCreateWithoutUtilisateurInput> | ContactCreateWithoutUtilisateurInput[] | ContactUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUtilisateurInput | ContactCreateOrConnectWithoutUtilisateurInput[]
    createMany?: ContactCreateManyUtilisateurInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type ProduitUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<ProduitCreateWithoutUtilisateurInput, ProduitUncheckedCreateWithoutUtilisateurInput> | ProduitCreateWithoutUtilisateurInput[] | ProduitUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutUtilisateurInput | ProduitCreateOrConnectWithoutUtilisateurInput[]
    createMany?: ProduitCreateManyUtilisateurInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type VenteUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<VenteCreateWithoutUtilisateurInput, VenteUncheckedCreateWithoutUtilisateurInput> | VenteCreateWithoutUtilisateurInput[] | VenteUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutUtilisateurInput | VenteCreateOrConnectWithoutUtilisateurInput[]
    createMany?: VenteCreateManyUtilisateurInputEnvelope
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
  }

  export type AchatUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<AchatCreateWithoutAgentInput, AchatUncheckedCreateWithoutAgentInput> | AchatCreateWithoutAgentInput[] | AchatUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutAgentInput | AchatCreateOrConnectWithoutAgentInput[]
    createMany?: AchatCreateManyAgentInputEnvelope
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
  }

  export type NullableEnumSexeFieldUpdateOperationsInput = {
    set?: $Enums.Sexe | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableEnumPosteFieldUpdateOperationsInput = {
    set?: $Enums.Poste | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdresseUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<AdresseCreateWithoutUtilisateurInput, AdresseUncheckedCreateWithoutUtilisateurInput> | AdresseCreateWithoutUtilisateurInput[] | AdresseUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: AdresseCreateOrConnectWithoutUtilisateurInput | AdresseCreateOrConnectWithoutUtilisateurInput[]
    upsert?: AdresseUpsertWithWhereUniqueWithoutUtilisateurInput | AdresseUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: AdresseCreateManyUtilisateurInputEnvelope
    set?: AdresseWhereUniqueInput | AdresseWhereUniqueInput[]
    disconnect?: AdresseWhereUniqueInput | AdresseWhereUniqueInput[]
    delete?: AdresseWhereUniqueInput | AdresseWhereUniqueInput[]
    connect?: AdresseWhereUniqueInput | AdresseWhereUniqueInput[]
    update?: AdresseUpdateWithWhereUniqueWithoutUtilisateurInput | AdresseUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: AdresseUpdateManyWithWhereWithoutUtilisateurInput | AdresseUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: AdresseScalarWhereInput | AdresseScalarWhereInput[]
  }

  export type ContactUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<ContactCreateWithoutUtilisateurInput, ContactUncheckedCreateWithoutUtilisateurInput> | ContactCreateWithoutUtilisateurInput[] | ContactUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUtilisateurInput | ContactCreateOrConnectWithoutUtilisateurInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutUtilisateurInput | ContactUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: ContactCreateManyUtilisateurInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutUtilisateurInput | ContactUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutUtilisateurInput | ContactUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type ProduitUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<ProduitCreateWithoutUtilisateurInput, ProduitUncheckedCreateWithoutUtilisateurInput> | ProduitCreateWithoutUtilisateurInput[] | ProduitUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutUtilisateurInput | ProduitCreateOrConnectWithoutUtilisateurInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutUtilisateurInput | ProduitUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: ProduitCreateManyUtilisateurInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutUtilisateurInput | ProduitUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutUtilisateurInput | ProduitUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type VenteUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<VenteCreateWithoutUtilisateurInput, VenteUncheckedCreateWithoutUtilisateurInput> | VenteCreateWithoutUtilisateurInput[] | VenteUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutUtilisateurInput | VenteCreateOrConnectWithoutUtilisateurInput[]
    upsert?: VenteUpsertWithWhereUniqueWithoutUtilisateurInput | VenteUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: VenteCreateManyUtilisateurInputEnvelope
    set?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    disconnect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    delete?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    update?: VenteUpdateWithWhereUniqueWithoutUtilisateurInput | VenteUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: VenteUpdateManyWithWhereWithoutUtilisateurInput | VenteUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: VenteScalarWhereInput | VenteScalarWhereInput[]
  }

  export type AchatUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AchatCreateWithoutAgentInput, AchatUncheckedCreateWithoutAgentInput> | AchatCreateWithoutAgentInput[] | AchatUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutAgentInput | AchatCreateOrConnectWithoutAgentInput[]
    upsert?: AchatUpsertWithWhereUniqueWithoutAgentInput | AchatUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AchatCreateManyAgentInputEnvelope
    set?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    disconnect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    delete?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    update?: AchatUpdateWithWhereUniqueWithoutAgentInput | AchatUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AchatUpdateManyWithWhereWithoutAgentInput | AchatUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AchatScalarWhereInput | AchatScalarWhereInput[]
  }

  export type AdresseUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<AdresseCreateWithoutUtilisateurInput, AdresseUncheckedCreateWithoutUtilisateurInput> | AdresseCreateWithoutUtilisateurInput[] | AdresseUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: AdresseCreateOrConnectWithoutUtilisateurInput | AdresseCreateOrConnectWithoutUtilisateurInput[]
    upsert?: AdresseUpsertWithWhereUniqueWithoutUtilisateurInput | AdresseUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: AdresseCreateManyUtilisateurInputEnvelope
    set?: AdresseWhereUniqueInput | AdresseWhereUniqueInput[]
    disconnect?: AdresseWhereUniqueInput | AdresseWhereUniqueInput[]
    delete?: AdresseWhereUniqueInput | AdresseWhereUniqueInput[]
    connect?: AdresseWhereUniqueInput | AdresseWhereUniqueInput[]
    update?: AdresseUpdateWithWhereUniqueWithoutUtilisateurInput | AdresseUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: AdresseUpdateManyWithWhereWithoutUtilisateurInput | AdresseUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: AdresseScalarWhereInput | AdresseScalarWhereInput[]
  }

  export type ContactUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<ContactCreateWithoutUtilisateurInput, ContactUncheckedCreateWithoutUtilisateurInput> | ContactCreateWithoutUtilisateurInput[] | ContactUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUtilisateurInput | ContactCreateOrConnectWithoutUtilisateurInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutUtilisateurInput | ContactUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: ContactCreateManyUtilisateurInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutUtilisateurInput | ContactUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutUtilisateurInput | ContactUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type ProduitUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<ProduitCreateWithoutUtilisateurInput, ProduitUncheckedCreateWithoutUtilisateurInput> | ProduitCreateWithoutUtilisateurInput[] | ProduitUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutUtilisateurInput | ProduitCreateOrConnectWithoutUtilisateurInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutUtilisateurInput | ProduitUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: ProduitCreateManyUtilisateurInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutUtilisateurInput | ProduitUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutUtilisateurInput | ProduitUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type VenteUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<VenteCreateWithoutUtilisateurInput, VenteUncheckedCreateWithoutUtilisateurInput> | VenteCreateWithoutUtilisateurInput[] | VenteUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutUtilisateurInput | VenteCreateOrConnectWithoutUtilisateurInput[]
    upsert?: VenteUpsertWithWhereUniqueWithoutUtilisateurInput | VenteUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: VenteCreateManyUtilisateurInputEnvelope
    set?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    disconnect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    delete?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    update?: VenteUpdateWithWhereUniqueWithoutUtilisateurInput | VenteUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: VenteUpdateManyWithWhereWithoutUtilisateurInput | VenteUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: VenteScalarWhereInput | VenteScalarWhereInput[]
  }

  export type AchatUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<AchatCreateWithoutAgentInput, AchatUncheckedCreateWithoutAgentInput> | AchatCreateWithoutAgentInput[] | AchatUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutAgentInput | AchatCreateOrConnectWithoutAgentInput[]
    upsert?: AchatUpsertWithWhereUniqueWithoutAgentInput | AchatUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: AchatCreateManyAgentInputEnvelope
    set?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    disconnect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    delete?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    update?: AchatUpdateWithWhereUniqueWithoutAgentInput | AchatUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: AchatUpdateManyWithWhereWithoutAgentInput | AchatUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: AchatScalarWhereInput | AchatScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutAdresseInput = {
    create?: XOR<UtilisateurCreateWithoutAdresseInput, UtilisateurUncheckedCreateWithoutAdresseInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutAdresseInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type FournisseurCreateNestedManyWithoutAdresseInput = {
    create?: XOR<FournisseurCreateWithoutAdresseInput, FournisseurUncheckedCreateWithoutAdresseInput> | FournisseurCreateWithoutAdresseInput[] | FournisseurUncheckedCreateWithoutAdresseInput[]
    connectOrCreate?: FournisseurCreateOrConnectWithoutAdresseInput | FournisseurCreateOrConnectWithoutAdresseInput[]
    createMany?: FournisseurCreateManyAdresseInputEnvelope
    connect?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
  }

  export type FournisseurUncheckedCreateNestedManyWithoutAdresseInput = {
    create?: XOR<FournisseurCreateWithoutAdresseInput, FournisseurUncheckedCreateWithoutAdresseInput> | FournisseurCreateWithoutAdresseInput[] | FournisseurUncheckedCreateWithoutAdresseInput[]
    connectOrCreate?: FournisseurCreateOrConnectWithoutAdresseInput | FournisseurCreateOrConnectWithoutAdresseInput[]
    createMany?: FournisseurCreateManyAdresseInputEnvelope
    connect?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
  }

  export type UtilisateurUpdateOneRequiredWithoutAdresseNestedInput = {
    create?: XOR<UtilisateurCreateWithoutAdresseInput, UtilisateurUncheckedCreateWithoutAdresseInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutAdresseInput
    upsert?: UtilisateurUpsertWithoutAdresseInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutAdresseInput, UtilisateurUpdateWithoutAdresseInput>, UtilisateurUncheckedUpdateWithoutAdresseInput>
  }

  export type FournisseurUpdateManyWithoutAdresseNestedInput = {
    create?: XOR<FournisseurCreateWithoutAdresseInput, FournisseurUncheckedCreateWithoutAdresseInput> | FournisseurCreateWithoutAdresseInput[] | FournisseurUncheckedCreateWithoutAdresseInput[]
    connectOrCreate?: FournisseurCreateOrConnectWithoutAdresseInput | FournisseurCreateOrConnectWithoutAdresseInput[]
    upsert?: FournisseurUpsertWithWhereUniqueWithoutAdresseInput | FournisseurUpsertWithWhereUniqueWithoutAdresseInput[]
    createMany?: FournisseurCreateManyAdresseInputEnvelope
    set?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    disconnect?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    delete?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    connect?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    update?: FournisseurUpdateWithWhereUniqueWithoutAdresseInput | FournisseurUpdateWithWhereUniqueWithoutAdresseInput[]
    updateMany?: FournisseurUpdateManyWithWhereWithoutAdresseInput | FournisseurUpdateManyWithWhereWithoutAdresseInput[]
    deleteMany?: FournisseurScalarWhereInput | FournisseurScalarWhereInput[]
  }

  export type FournisseurUncheckedUpdateManyWithoutAdresseNestedInput = {
    create?: XOR<FournisseurCreateWithoutAdresseInput, FournisseurUncheckedCreateWithoutAdresseInput> | FournisseurCreateWithoutAdresseInput[] | FournisseurUncheckedCreateWithoutAdresseInput[]
    connectOrCreate?: FournisseurCreateOrConnectWithoutAdresseInput | FournisseurCreateOrConnectWithoutAdresseInput[]
    upsert?: FournisseurUpsertWithWhereUniqueWithoutAdresseInput | FournisseurUpsertWithWhereUniqueWithoutAdresseInput[]
    createMany?: FournisseurCreateManyAdresseInputEnvelope
    set?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    disconnect?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    delete?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    connect?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    update?: FournisseurUpdateWithWhereUniqueWithoutAdresseInput | FournisseurUpdateWithWhereUniqueWithoutAdresseInput[]
    updateMany?: FournisseurUpdateManyWithWhereWithoutAdresseInput | FournisseurUpdateManyWithWhereWithoutAdresseInput[]
    deleteMany?: FournisseurScalarWhereInput | FournisseurScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutContactInput = {
    create?: XOR<UtilisateurCreateWithoutContactInput, UtilisateurUncheckedCreateWithoutContactInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutContactInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type FournisseurCreateNestedManyWithoutContactInput = {
    create?: XOR<FournisseurCreateWithoutContactInput, FournisseurUncheckedCreateWithoutContactInput> | FournisseurCreateWithoutContactInput[] | FournisseurUncheckedCreateWithoutContactInput[]
    connectOrCreate?: FournisseurCreateOrConnectWithoutContactInput | FournisseurCreateOrConnectWithoutContactInput[]
    createMany?: FournisseurCreateManyContactInputEnvelope
    connect?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
  }

  export type FournisseurUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<FournisseurCreateWithoutContactInput, FournisseurUncheckedCreateWithoutContactInput> | FournisseurCreateWithoutContactInput[] | FournisseurUncheckedCreateWithoutContactInput[]
    connectOrCreate?: FournisseurCreateOrConnectWithoutContactInput | FournisseurCreateOrConnectWithoutContactInput[]
    createMany?: FournisseurCreateManyContactInputEnvelope
    connect?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
  }

  export type UtilisateurUpdateOneRequiredWithoutContactNestedInput = {
    create?: XOR<UtilisateurCreateWithoutContactInput, UtilisateurUncheckedCreateWithoutContactInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutContactInput
    upsert?: UtilisateurUpsertWithoutContactInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutContactInput, UtilisateurUpdateWithoutContactInput>, UtilisateurUncheckedUpdateWithoutContactInput>
  }

  export type FournisseurUpdateManyWithoutContactNestedInput = {
    create?: XOR<FournisseurCreateWithoutContactInput, FournisseurUncheckedCreateWithoutContactInput> | FournisseurCreateWithoutContactInput[] | FournisseurUncheckedCreateWithoutContactInput[]
    connectOrCreate?: FournisseurCreateOrConnectWithoutContactInput | FournisseurCreateOrConnectWithoutContactInput[]
    upsert?: FournisseurUpsertWithWhereUniqueWithoutContactInput | FournisseurUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: FournisseurCreateManyContactInputEnvelope
    set?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    disconnect?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    delete?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    connect?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    update?: FournisseurUpdateWithWhereUniqueWithoutContactInput | FournisseurUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: FournisseurUpdateManyWithWhereWithoutContactInput | FournisseurUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: FournisseurScalarWhereInput | FournisseurScalarWhereInput[]
  }

  export type FournisseurUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<FournisseurCreateWithoutContactInput, FournisseurUncheckedCreateWithoutContactInput> | FournisseurCreateWithoutContactInput[] | FournisseurUncheckedCreateWithoutContactInput[]
    connectOrCreate?: FournisseurCreateOrConnectWithoutContactInput | FournisseurCreateOrConnectWithoutContactInput[]
    upsert?: FournisseurUpsertWithWhereUniqueWithoutContactInput | FournisseurUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: FournisseurCreateManyContactInputEnvelope
    set?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    disconnect?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    delete?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    connect?: FournisseurWhereUniqueInput | FournisseurWhereUniqueInput[]
    update?: FournisseurUpdateWithWhereUniqueWithoutContactInput | FournisseurUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: FournisseurUpdateManyWithWhereWithoutContactInput | FournisseurUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: FournisseurScalarWhereInput | FournisseurScalarWhereInput[]
  }

  export type AdresseCreateNestedOneWithoutFournisseurInput = {
    create?: XOR<AdresseCreateWithoutFournisseurInput, AdresseUncheckedCreateWithoutFournisseurInput>
    connectOrCreate?: AdresseCreateOrConnectWithoutFournisseurInput
    connect?: AdresseWhereUniqueInput
  }

  export type ContactCreateNestedOneWithoutFournisseurInput = {
    create?: XOR<ContactCreateWithoutFournisseurInput, ContactUncheckedCreateWithoutFournisseurInput>
    connectOrCreate?: ContactCreateOrConnectWithoutFournisseurInput
    connect?: ContactWhereUniqueInput
  }

  export type VenteCreateNestedManyWithoutFournisseurInput = {
    create?: XOR<VenteCreateWithoutFournisseurInput, VenteUncheckedCreateWithoutFournisseurInput> | VenteCreateWithoutFournisseurInput[] | VenteUncheckedCreateWithoutFournisseurInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutFournisseurInput | VenteCreateOrConnectWithoutFournisseurInput[]
    createMany?: VenteCreateManyFournisseurInputEnvelope
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
  }

  export type AchatCreateNestedManyWithoutFournisseurInput = {
    create?: XOR<AchatCreateWithoutFournisseurInput, AchatUncheckedCreateWithoutFournisseurInput> | AchatCreateWithoutFournisseurInput[] | AchatUncheckedCreateWithoutFournisseurInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutFournisseurInput | AchatCreateOrConnectWithoutFournisseurInput[]
    createMany?: AchatCreateManyFournisseurInputEnvelope
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
  }

  export type VenteUncheckedCreateNestedManyWithoutFournisseurInput = {
    create?: XOR<VenteCreateWithoutFournisseurInput, VenteUncheckedCreateWithoutFournisseurInput> | VenteCreateWithoutFournisseurInput[] | VenteUncheckedCreateWithoutFournisseurInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutFournisseurInput | VenteCreateOrConnectWithoutFournisseurInput[]
    createMany?: VenteCreateManyFournisseurInputEnvelope
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
  }

  export type AchatUncheckedCreateNestedManyWithoutFournisseurInput = {
    create?: XOR<AchatCreateWithoutFournisseurInput, AchatUncheckedCreateWithoutFournisseurInput> | AchatCreateWithoutFournisseurInput[] | AchatUncheckedCreateWithoutFournisseurInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutFournisseurInput | AchatCreateOrConnectWithoutFournisseurInput[]
    createMany?: AchatCreateManyFournisseurInputEnvelope
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
  }

  export type AdresseUpdateOneRequiredWithoutFournisseurNestedInput = {
    create?: XOR<AdresseCreateWithoutFournisseurInput, AdresseUncheckedCreateWithoutFournisseurInput>
    connectOrCreate?: AdresseCreateOrConnectWithoutFournisseurInput
    upsert?: AdresseUpsertWithoutFournisseurInput
    connect?: AdresseWhereUniqueInput
    update?: XOR<XOR<AdresseUpdateToOneWithWhereWithoutFournisseurInput, AdresseUpdateWithoutFournisseurInput>, AdresseUncheckedUpdateWithoutFournisseurInput>
  }

  export type ContactUpdateOneRequiredWithoutFournisseurNestedInput = {
    create?: XOR<ContactCreateWithoutFournisseurInput, ContactUncheckedCreateWithoutFournisseurInput>
    connectOrCreate?: ContactCreateOrConnectWithoutFournisseurInput
    upsert?: ContactUpsertWithoutFournisseurInput
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutFournisseurInput, ContactUpdateWithoutFournisseurInput>, ContactUncheckedUpdateWithoutFournisseurInput>
  }

  export type VenteUpdateManyWithoutFournisseurNestedInput = {
    create?: XOR<VenteCreateWithoutFournisseurInput, VenteUncheckedCreateWithoutFournisseurInput> | VenteCreateWithoutFournisseurInput[] | VenteUncheckedCreateWithoutFournisseurInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutFournisseurInput | VenteCreateOrConnectWithoutFournisseurInput[]
    upsert?: VenteUpsertWithWhereUniqueWithoutFournisseurInput | VenteUpsertWithWhereUniqueWithoutFournisseurInput[]
    createMany?: VenteCreateManyFournisseurInputEnvelope
    set?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    disconnect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    delete?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    update?: VenteUpdateWithWhereUniqueWithoutFournisseurInput | VenteUpdateWithWhereUniqueWithoutFournisseurInput[]
    updateMany?: VenteUpdateManyWithWhereWithoutFournisseurInput | VenteUpdateManyWithWhereWithoutFournisseurInput[]
    deleteMany?: VenteScalarWhereInput | VenteScalarWhereInput[]
  }

  export type AchatUpdateManyWithoutFournisseurNestedInput = {
    create?: XOR<AchatCreateWithoutFournisseurInput, AchatUncheckedCreateWithoutFournisseurInput> | AchatCreateWithoutFournisseurInput[] | AchatUncheckedCreateWithoutFournisseurInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutFournisseurInput | AchatCreateOrConnectWithoutFournisseurInput[]
    upsert?: AchatUpsertWithWhereUniqueWithoutFournisseurInput | AchatUpsertWithWhereUniqueWithoutFournisseurInput[]
    createMany?: AchatCreateManyFournisseurInputEnvelope
    set?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    disconnect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    delete?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    update?: AchatUpdateWithWhereUniqueWithoutFournisseurInput | AchatUpdateWithWhereUniqueWithoutFournisseurInput[]
    updateMany?: AchatUpdateManyWithWhereWithoutFournisseurInput | AchatUpdateManyWithWhereWithoutFournisseurInput[]
    deleteMany?: AchatScalarWhereInput | AchatScalarWhereInput[]
  }

  export type VenteUncheckedUpdateManyWithoutFournisseurNestedInput = {
    create?: XOR<VenteCreateWithoutFournisseurInput, VenteUncheckedCreateWithoutFournisseurInput> | VenteCreateWithoutFournisseurInput[] | VenteUncheckedCreateWithoutFournisseurInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutFournisseurInput | VenteCreateOrConnectWithoutFournisseurInput[]
    upsert?: VenteUpsertWithWhereUniqueWithoutFournisseurInput | VenteUpsertWithWhereUniqueWithoutFournisseurInput[]
    createMany?: VenteCreateManyFournisseurInputEnvelope
    set?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    disconnect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    delete?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    update?: VenteUpdateWithWhereUniqueWithoutFournisseurInput | VenteUpdateWithWhereUniqueWithoutFournisseurInput[]
    updateMany?: VenteUpdateManyWithWhereWithoutFournisseurInput | VenteUpdateManyWithWhereWithoutFournisseurInput[]
    deleteMany?: VenteScalarWhereInput | VenteScalarWhereInput[]
  }

  export type AchatUncheckedUpdateManyWithoutFournisseurNestedInput = {
    create?: XOR<AchatCreateWithoutFournisseurInput, AchatUncheckedCreateWithoutFournisseurInput> | AchatCreateWithoutFournisseurInput[] | AchatUncheckedCreateWithoutFournisseurInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutFournisseurInput | AchatCreateOrConnectWithoutFournisseurInput[]
    upsert?: AchatUpsertWithWhereUniqueWithoutFournisseurInput | AchatUpsertWithWhereUniqueWithoutFournisseurInput[]
    createMany?: AchatCreateManyFournisseurInputEnvelope
    set?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    disconnect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    delete?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    update?: AchatUpdateWithWhereUniqueWithoutFournisseurInput | AchatUpdateWithWhereUniqueWithoutFournisseurInput[]
    updateMany?: AchatUpdateManyWithWhereWithoutFournisseurInput | AchatUpdateManyWithWhereWithoutFournisseurInput[]
    deleteMany?: AchatScalarWhereInput | AchatScalarWhereInput[]
  }

  export type ProduitCreateNestedManyWithoutTeneurInput = {
    create?: XOR<ProduitCreateWithoutTeneurInput, ProduitUncheckedCreateWithoutTeneurInput> | ProduitCreateWithoutTeneurInput[] | ProduitUncheckedCreateWithoutTeneurInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutTeneurInput | ProduitCreateOrConnectWithoutTeneurInput[]
    createMany?: ProduitCreateManyTeneurInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type ProduitUncheckedCreateNestedManyWithoutTeneurInput = {
    create?: XOR<ProduitCreateWithoutTeneurInput, ProduitUncheckedCreateWithoutTeneurInput> | ProduitCreateWithoutTeneurInput[] | ProduitUncheckedCreateWithoutTeneurInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutTeneurInput | ProduitCreateOrConnectWithoutTeneurInput[]
    createMany?: ProduitCreateManyTeneurInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProduitUpdateManyWithoutTeneurNestedInput = {
    create?: XOR<ProduitCreateWithoutTeneurInput, ProduitUncheckedCreateWithoutTeneurInput> | ProduitCreateWithoutTeneurInput[] | ProduitUncheckedCreateWithoutTeneurInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutTeneurInput | ProduitCreateOrConnectWithoutTeneurInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutTeneurInput | ProduitUpsertWithWhereUniqueWithoutTeneurInput[]
    createMany?: ProduitCreateManyTeneurInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutTeneurInput | ProduitUpdateWithWhereUniqueWithoutTeneurInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutTeneurInput | ProduitUpdateManyWithWhereWithoutTeneurInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type ProduitUncheckedUpdateManyWithoutTeneurNestedInput = {
    create?: XOR<ProduitCreateWithoutTeneurInput, ProduitUncheckedCreateWithoutTeneurInput> | ProduitCreateWithoutTeneurInput[] | ProduitUncheckedCreateWithoutTeneurInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutTeneurInput | ProduitCreateOrConnectWithoutTeneurInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutTeneurInput | ProduitUpsertWithWhereUniqueWithoutTeneurInput[]
    createMany?: ProduitCreateManyTeneurInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutTeneurInput | ProduitUpdateWithWhereUniqueWithoutTeneurInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutTeneurInput | ProduitUpdateManyWithWhereWithoutTeneurInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type TeneurCreateNestedOneWithoutProduitInput = {
    create?: XOR<TeneurCreateWithoutProduitInput, TeneurUncheckedCreateWithoutProduitInput>
    connectOrCreate?: TeneurCreateOrConnectWithoutProduitInput
    connect?: TeneurWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutProduitInput = {
    create?: XOR<UtilisateurCreateWithoutProduitInput, UtilisateurUncheckedCreateWithoutProduitInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutProduitInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type DetailVenteCreateNestedManyWithoutProduitInput = {
    create?: XOR<DetailVenteCreateWithoutProduitInput, DetailVenteUncheckedCreateWithoutProduitInput> | DetailVenteCreateWithoutProduitInput[] | DetailVenteUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: DetailVenteCreateOrConnectWithoutProduitInput | DetailVenteCreateOrConnectWithoutProduitInput[]
    createMany?: DetailVenteCreateManyProduitInputEnvelope
    connect?: DetailVenteWhereUniqueInput | DetailVenteWhereUniqueInput[]
  }

  export type DetailAchatCreateNestedManyWithoutProduitInput = {
    create?: XOR<DetailAchatCreateWithoutProduitInput, DetailAchatUncheckedCreateWithoutProduitInput> | DetailAchatCreateWithoutProduitInput[] | DetailAchatUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: DetailAchatCreateOrConnectWithoutProduitInput | DetailAchatCreateOrConnectWithoutProduitInput[]
    createMany?: DetailAchatCreateManyProduitInputEnvelope
    connect?: DetailAchatWhereUniqueInput | DetailAchatWhereUniqueInput[]
  }

  export type DetailVenteUncheckedCreateNestedManyWithoutProduitInput = {
    create?: XOR<DetailVenteCreateWithoutProduitInput, DetailVenteUncheckedCreateWithoutProduitInput> | DetailVenteCreateWithoutProduitInput[] | DetailVenteUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: DetailVenteCreateOrConnectWithoutProduitInput | DetailVenteCreateOrConnectWithoutProduitInput[]
    createMany?: DetailVenteCreateManyProduitInputEnvelope
    connect?: DetailVenteWhereUniqueInput | DetailVenteWhereUniqueInput[]
  }

  export type DetailAchatUncheckedCreateNestedManyWithoutProduitInput = {
    create?: XOR<DetailAchatCreateWithoutProduitInput, DetailAchatUncheckedCreateWithoutProduitInput> | DetailAchatCreateWithoutProduitInput[] | DetailAchatUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: DetailAchatCreateOrConnectWithoutProduitInput | DetailAchatCreateOrConnectWithoutProduitInput[]
    createMany?: DetailAchatCreateManyProduitInputEnvelope
    connect?: DetailAchatWhereUniqueInput | DetailAchatWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeneurUpdateOneRequiredWithoutProduitNestedInput = {
    create?: XOR<TeneurCreateWithoutProduitInput, TeneurUncheckedCreateWithoutProduitInput>
    connectOrCreate?: TeneurCreateOrConnectWithoutProduitInput
    upsert?: TeneurUpsertWithoutProduitInput
    connect?: TeneurWhereUniqueInput
    update?: XOR<XOR<TeneurUpdateToOneWithWhereWithoutProduitInput, TeneurUpdateWithoutProduitInput>, TeneurUncheckedUpdateWithoutProduitInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutProduitNestedInput = {
    create?: XOR<UtilisateurCreateWithoutProduitInput, UtilisateurUncheckedCreateWithoutProduitInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutProduitInput
    upsert?: UtilisateurUpsertWithoutProduitInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutProduitInput, UtilisateurUpdateWithoutProduitInput>, UtilisateurUncheckedUpdateWithoutProduitInput>
  }

  export type DetailVenteUpdateManyWithoutProduitNestedInput = {
    create?: XOR<DetailVenteCreateWithoutProduitInput, DetailVenteUncheckedCreateWithoutProduitInput> | DetailVenteCreateWithoutProduitInput[] | DetailVenteUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: DetailVenteCreateOrConnectWithoutProduitInput | DetailVenteCreateOrConnectWithoutProduitInput[]
    upsert?: DetailVenteUpsertWithWhereUniqueWithoutProduitInput | DetailVenteUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: DetailVenteCreateManyProduitInputEnvelope
    set?: DetailVenteWhereUniqueInput | DetailVenteWhereUniqueInput[]
    disconnect?: DetailVenteWhereUniqueInput | DetailVenteWhereUniqueInput[]
    delete?: DetailVenteWhereUniqueInput | DetailVenteWhereUniqueInput[]
    connect?: DetailVenteWhereUniqueInput | DetailVenteWhereUniqueInput[]
    update?: DetailVenteUpdateWithWhereUniqueWithoutProduitInput | DetailVenteUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: DetailVenteUpdateManyWithWhereWithoutProduitInput | DetailVenteUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: DetailVenteScalarWhereInput | DetailVenteScalarWhereInput[]
  }

  export type DetailAchatUpdateManyWithoutProduitNestedInput = {
    create?: XOR<DetailAchatCreateWithoutProduitInput, DetailAchatUncheckedCreateWithoutProduitInput> | DetailAchatCreateWithoutProduitInput[] | DetailAchatUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: DetailAchatCreateOrConnectWithoutProduitInput | DetailAchatCreateOrConnectWithoutProduitInput[]
    upsert?: DetailAchatUpsertWithWhereUniqueWithoutProduitInput | DetailAchatUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: DetailAchatCreateManyProduitInputEnvelope
    set?: DetailAchatWhereUniqueInput | DetailAchatWhereUniqueInput[]
    disconnect?: DetailAchatWhereUniqueInput | DetailAchatWhereUniqueInput[]
    delete?: DetailAchatWhereUniqueInput | DetailAchatWhereUniqueInput[]
    connect?: DetailAchatWhereUniqueInput | DetailAchatWhereUniqueInput[]
    update?: DetailAchatUpdateWithWhereUniqueWithoutProduitInput | DetailAchatUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: DetailAchatUpdateManyWithWhereWithoutProduitInput | DetailAchatUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: DetailAchatScalarWhereInput | DetailAchatScalarWhereInput[]
  }

  export type DetailVenteUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: XOR<DetailVenteCreateWithoutProduitInput, DetailVenteUncheckedCreateWithoutProduitInput> | DetailVenteCreateWithoutProduitInput[] | DetailVenteUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: DetailVenteCreateOrConnectWithoutProduitInput | DetailVenteCreateOrConnectWithoutProduitInput[]
    upsert?: DetailVenteUpsertWithWhereUniqueWithoutProduitInput | DetailVenteUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: DetailVenteCreateManyProduitInputEnvelope
    set?: DetailVenteWhereUniqueInput | DetailVenteWhereUniqueInput[]
    disconnect?: DetailVenteWhereUniqueInput | DetailVenteWhereUniqueInput[]
    delete?: DetailVenteWhereUniqueInput | DetailVenteWhereUniqueInput[]
    connect?: DetailVenteWhereUniqueInput | DetailVenteWhereUniqueInput[]
    update?: DetailVenteUpdateWithWhereUniqueWithoutProduitInput | DetailVenteUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: DetailVenteUpdateManyWithWhereWithoutProduitInput | DetailVenteUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: DetailVenteScalarWhereInput | DetailVenteScalarWhereInput[]
  }

  export type DetailAchatUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: XOR<DetailAchatCreateWithoutProduitInput, DetailAchatUncheckedCreateWithoutProduitInput> | DetailAchatCreateWithoutProduitInput[] | DetailAchatUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: DetailAchatCreateOrConnectWithoutProduitInput | DetailAchatCreateOrConnectWithoutProduitInput[]
    upsert?: DetailAchatUpsertWithWhereUniqueWithoutProduitInput | DetailAchatUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: DetailAchatCreateManyProduitInputEnvelope
    set?: DetailAchatWhereUniqueInput | DetailAchatWhereUniqueInput[]
    disconnect?: DetailAchatWhereUniqueInput | DetailAchatWhereUniqueInput[]
    delete?: DetailAchatWhereUniqueInput | DetailAchatWhereUniqueInput[]
    connect?: DetailAchatWhereUniqueInput | DetailAchatWhereUniqueInput[]
    update?: DetailAchatUpdateWithWhereUniqueWithoutProduitInput | DetailAchatUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: DetailAchatUpdateManyWithWhereWithoutProduitInput | DetailAchatUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: DetailAchatScalarWhereInput | DetailAchatScalarWhereInput[]
  }

  export type ProduitCreateNestedOneWithoutDetailVenteInput = {
    create?: XOR<ProduitCreateWithoutDetailVenteInput, ProduitUncheckedCreateWithoutDetailVenteInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutDetailVenteInput
    connect?: ProduitWhereUniqueInput
  }

  export type VenteCreateNestedManyWithoutDetailventeInput = {
    create?: XOR<VenteCreateWithoutDetailventeInput, VenteUncheckedCreateWithoutDetailventeInput> | VenteCreateWithoutDetailventeInput[] | VenteUncheckedCreateWithoutDetailventeInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutDetailventeInput | VenteCreateOrConnectWithoutDetailventeInput[]
    createMany?: VenteCreateManyDetailventeInputEnvelope
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
  }

  export type VenteUncheckedCreateNestedManyWithoutDetailventeInput = {
    create?: XOR<VenteCreateWithoutDetailventeInput, VenteUncheckedCreateWithoutDetailventeInput> | VenteCreateWithoutDetailventeInput[] | VenteUncheckedCreateWithoutDetailventeInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutDetailventeInput | VenteCreateOrConnectWithoutDetailventeInput[]
    createMany?: VenteCreateManyDetailventeInputEnvelope
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
  }

  export type ProduitUpdateOneRequiredWithoutDetailVenteNestedInput = {
    create?: XOR<ProduitCreateWithoutDetailVenteInput, ProduitUncheckedCreateWithoutDetailVenteInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutDetailVenteInput
    upsert?: ProduitUpsertWithoutDetailVenteInput
    connect?: ProduitWhereUniqueInput
    update?: XOR<XOR<ProduitUpdateToOneWithWhereWithoutDetailVenteInput, ProduitUpdateWithoutDetailVenteInput>, ProduitUncheckedUpdateWithoutDetailVenteInput>
  }

  export type VenteUpdateManyWithoutDetailventeNestedInput = {
    create?: XOR<VenteCreateWithoutDetailventeInput, VenteUncheckedCreateWithoutDetailventeInput> | VenteCreateWithoutDetailventeInput[] | VenteUncheckedCreateWithoutDetailventeInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutDetailventeInput | VenteCreateOrConnectWithoutDetailventeInput[]
    upsert?: VenteUpsertWithWhereUniqueWithoutDetailventeInput | VenteUpsertWithWhereUniqueWithoutDetailventeInput[]
    createMany?: VenteCreateManyDetailventeInputEnvelope
    set?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    disconnect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    delete?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    update?: VenteUpdateWithWhereUniqueWithoutDetailventeInput | VenteUpdateWithWhereUniqueWithoutDetailventeInput[]
    updateMany?: VenteUpdateManyWithWhereWithoutDetailventeInput | VenteUpdateManyWithWhereWithoutDetailventeInput[]
    deleteMany?: VenteScalarWhereInput | VenteScalarWhereInput[]
  }

  export type VenteUncheckedUpdateManyWithoutDetailventeNestedInput = {
    create?: XOR<VenteCreateWithoutDetailventeInput, VenteUncheckedCreateWithoutDetailventeInput> | VenteCreateWithoutDetailventeInput[] | VenteUncheckedCreateWithoutDetailventeInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutDetailventeInput | VenteCreateOrConnectWithoutDetailventeInput[]
    upsert?: VenteUpsertWithWhereUniqueWithoutDetailventeInput | VenteUpsertWithWhereUniqueWithoutDetailventeInput[]
    createMany?: VenteCreateManyDetailventeInputEnvelope
    set?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    disconnect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    delete?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    update?: VenteUpdateWithWhereUniqueWithoutDetailventeInput | VenteUpdateWithWhereUniqueWithoutDetailventeInput[]
    updateMany?: VenteUpdateManyWithWhereWithoutDetailventeInput | VenteUpdateManyWithWhereWithoutDetailventeInput[]
    deleteMany?: VenteScalarWhereInput | VenteScalarWhereInput[]
  }

  export type VenteCreateNestedManyWithoutPeiementInput = {
    create?: XOR<VenteCreateWithoutPeiementInput, VenteUncheckedCreateWithoutPeiementInput> | VenteCreateWithoutPeiementInput[] | VenteUncheckedCreateWithoutPeiementInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutPeiementInput | VenteCreateOrConnectWithoutPeiementInput[]
    createMany?: VenteCreateManyPeiementInputEnvelope
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
  }

  export type AchatCreateNestedManyWithoutPaiementInput = {
    create?: XOR<AchatCreateWithoutPaiementInput, AchatUncheckedCreateWithoutPaiementInput> | AchatCreateWithoutPaiementInput[] | AchatUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutPaiementInput | AchatCreateOrConnectWithoutPaiementInput[]
    createMany?: AchatCreateManyPaiementInputEnvelope
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
  }

  export type VenteUncheckedCreateNestedManyWithoutPeiementInput = {
    create?: XOR<VenteCreateWithoutPeiementInput, VenteUncheckedCreateWithoutPeiementInput> | VenteCreateWithoutPeiementInput[] | VenteUncheckedCreateWithoutPeiementInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutPeiementInput | VenteCreateOrConnectWithoutPeiementInput[]
    createMany?: VenteCreateManyPeiementInputEnvelope
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
  }

  export type AchatUncheckedCreateNestedManyWithoutPaiementInput = {
    create?: XOR<AchatCreateWithoutPaiementInput, AchatUncheckedCreateWithoutPaiementInput> | AchatCreateWithoutPaiementInput[] | AchatUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutPaiementInput | AchatCreateOrConnectWithoutPaiementInput[]
    createMany?: AchatCreateManyPaiementInputEnvelope
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
  }

  export type EnumMoyenPaimentFieldUpdateOperationsInput = {
    set?: $Enums.MoyenPaiment
  }

  export type VenteUpdateManyWithoutPeiementNestedInput = {
    create?: XOR<VenteCreateWithoutPeiementInput, VenteUncheckedCreateWithoutPeiementInput> | VenteCreateWithoutPeiementInput[] | VenteUncheckedCreateWithoutPeiementInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutPeiementInput | VenteCreateOrConnectWithoutPeiementInput[]
    upsert?: VenteUpsertWithWhereUniqueWithoutPeiementInput | VenteUpsertWithWhereUniqueWithoutPeiementInput[]
    createMany?: VenteCreateManyPeiementInputEnvelope
    set?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    disconnect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    delete?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    update?: VenteUpdateWithWhereUniqueWithoutPeiementInput | VenteUpdateWithWhereUniqueWithoutPeiementInput[]
    updateMany?: VenteUpdateManyWithWhereWithoutPeiementInput | VenteUpdateManyWithWhereWithoutPeiementInput[]
    deleteMany?: VenteScalarWhereInput | VenteScalarWhereInput[]
  }

  export type AchatUpdateManyWithoutPaiementNestedInput = {
    create?: XOR<AchatCreateWithoutPaiementInput, AchatUncheckedCreateWithoutPaiementInput> | AchatCreateWithoutPaiementInput[] | AchatUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutPaiementInput | AchatCreateOrConnectWithoutPaiementInput[]
    upsert?: AchatUpsertWithWhereUniqueWithoutPaiementInput | AchatUpsertWithWhereUniqueWithoutPaiementInput[]
    createMany?: AchatCreateManyPaiementInputEnvelope
    set?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    disconnect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    delete?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    update?: AchatUpdateWithWhereUniqueWithoutPaiementInput | AchatUpdateWithWhereUniqueWithoutPaiementInput[]
    updateMany?: AchatUpdateManyWithWhereWithoutPaiementInput | AchatUpdateManyWithWhereWithoutPaiementInput[]
    deleteMany?: AchatScalarWhereInput | AchatScalarWhereInput[]
  }

  export type VenteUncheckedUpdateManyWithoutPeiementNestedInput = {
    create?: XOR<VenteCreateWithoutPeiementInput, VenteUncheckedCreateWithoutPeiementInput> | VenteCreateWithoutPeiementInput[] | VenteUncheckedCreateWithoutPeiementInput[]
    connectOrCreate?: VenteCreateOrConnectWithoutPeiementInput | VenteCreateOrConnectWithoutPeiementInput[]
    upsert?: VenteUpsertWithWhereUniqueWithoutPeiementInput | VenteUpsertWithWhereUniqueWithoutPeiementInput[]
    createMany?: VenteCreateManyPeiementInputEnvelope
    set?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    disconnect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    delete?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    connect?: VenteWhereUniqueInput | VenteWhereUniqueInput[]
    update?: VenteUpdateWithWhereUniqueWithoutPeiementInput | VenteUpdateWithWhereUniqueWithoutPeiementInput[]
    updateMany?: VenteUpdateManyWithWhereWithoutPeiementInput | VenteUpdateManyWithWhereWithoutPeiementInput[]
    deleteMany?: VenteScalarWhereInput | VenteScalarWhereInput[]
  }

  export type AchatUncheckedUpdateManyWithoutPaiementNestedInput = {
    create?: XOR<AchatCreateWithoutPaiementInput, AchatUncheckedCreateWithoutPaiementInput> | AchatCreateWithoutPaiementInput[] | AchatUncheckedCreateWithoutPaiementInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutPaiementInput | AchatCreateOrConnectWithoutPaiementInput[]
    upsert?: AchatUpsertWithWhereUniqueWithoutPaiementInput | AchatUpsertWithWhereUniqueWithoutPaiementInput[]
    createMany?: AchatCreateManyPaiementInputEnvelope
    set?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    disconnect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    delete?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    update?: AchatUpdateWithWhereUniqueWithoutPaiementInput | AchatUpdateWithWhereUniqueWithoutPaiementInput[]
    updateMany?: AchatUpdateManyWithWhereWithoutPaiementInput | AchatUpdateManyWithWhereWithoutPaiementInput[]
    deleteMany?: AchatScalarWhereInput | AchatScalarWhereInput[]
  }

  export type DetailVenteCreateNestedOneWithoutVenteInput = {
    create?: XOR<DetailVenteCreateWithoutVenteInput, DetailVenteUncheckedCreateWithoutVenteInput>
    connectOrCreate?: DetailVenteCreateOrConnectWithoutVenteInput
    connect?: DetailVenteWhereUniqueInput
  }

  export type PaiementCreateNestedOneWithoutVenteInput = {
    create?: XOR<PaiementCreateWithoutVenteInput, PaiementUncheckedCreateWithoutVenteInput>
    connectOrCreate?: PaiementCreateOrConnectWithoutVenteInput
    connect?: PaiementWhereUniqueInput
  }

  export type EntrepriseCreateNestedOneWithoutVenteInput = {
    create?: XOR<EntrepriseCreateWithoutVenteInput, EntrepriseUncheckedCreateWithoutVenteInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutVenteInput
    connect?: EntrepriseWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutVenteInput = {
    create?: XOR<UtilisateurCreateWithoutVenteInput, UtilisateurUncheckedCreateWithoutVenteInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutVenteInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type FournisseurCreateNestedOneWithoutVenteInput = {
    create?: XOR<FournisseurCreateWithoutVenteInput, FournisseurUncheckedCreateWithoutVenteInput>
    connectOrCreate?: FournisseurCreateOrConnectWithoutVenteInput
    connect?: FournisseurWhereUniqueInput
  }

  export type DetailVenteUpdateOneRequiredWithoutVenteNestedInput = {
    create?: XOR<DetailVenteCreateWithoutVenteInput, DetailVenteUncheckedCreateWithoutVenteInput>
    connectOrCreate?: DetailVenteCreateOrConnectWithoutVenteInput
    upsert?: DetailVenteUpsertWithoutVenteInput
    connect?: DetailVenteWhereUniqueInput
    update?: XOR<XOR<DetailVenteUpdateToOneWithWhereWithoutVenteInput, DetailVenteUpdateWithoutVenteInput>, DetailVenteUncheckedUpdateWithoutVenteInput>
  }

  export type PaiementUpdateOneRequiredWithoutVenteNestedInput = {
    create?: XOR<PaiementCreateWithoutVenteInput, PaiementUncheckedCreateWithoutVenteInput>
    connectOrCreate?: PaiementCreateOrConnectWithoutVenteInput
    upsert?: PaiementUpsertWithoutVenteInput
    connect?: PaiementWhereUniqueInput
    update?: XOR<XOR<PaiementUpdateToOneWithWhereWithoutVenteInput, PaiementUpdateWithoutVenteInput>, PaiementUncheckedUpdateWithoutVenteInput>
  }

  export type EntrepriseUpdateOneRequiredWithoutVenteNestedInput = {
    create?: XOR<EntrepriseCreateWithoutVenteInput, EntrepriseUncheckedCreateWithoutVenteInput>
    connectOrCreate?: EntrepriseCreateOrConnectWithoutVenteInput
    upsert?: EntrepriseUpsertWithoutVenteInput
    connect?: EntrepriseWhereUniqueInput
    update?: XOR<XOR<EntrepriseUpdateToOneWithWhereWithoutVenteInput, EntrepriseUpdateWithoutVenteInput>, EntrepriseUncheckedUpdateWithoutVenteInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutVenteNestedInput = {
    create?: XOR<UtilisateurCreateWithoutVenteInput, UtilisateurUncheckedCreateWithoutVenteInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutVenteInput
    upsert?: UtilisateurUpsertWithoutVenteInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutVenteInput, UtilisateurUpdateWithoutVenteInput>, UtilisateurUncheckedUpdateWithoutVenteInput>
  }

  export type FournisseurUpdateOneWithoutVenteNestedInput = {
    create?: XOR<FournisseurCreateWithoutVenteInput, FournisseurUncheckedCreateWithoutVenteInput>
    connectOrCreate?: FournisseurCreateOrConnectWithoutVenteInput
    upsert?: FournisseurUpsertWithoutVenteInput
    disconnect?: FournisseurWhereInput | boolean
    delete?: FournisseurWhereInput | boolean
    connect?: FournisseurWhereUniqueInput
    update?: XOR<XOR<FournisseurUpdateToOneWithWhereWithoutVenteInput, FournisseurUpdateWithoutVenteInput>, FournisseurUncheckedUpdateWithoutVenteInput>
  }

  export type ProduitCreateNestedOneWithoutDetailAchatInput = {
    create?: XOR<ProduitCreateWithoutDetailAchatInput, ProduitUncheckedCreateWithoutDetailAchatInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutDetailAchatInput
    connect?: ProduitWhereUniqueInput
  }

  export type AchatCreateNestedManyWithoutDetailAchatInput = {
    create?: XOR<AchatCreateWithoutDetailAchatInput, AchatUncheckedCreateWithoutDetailAchatInput> | AchatCreateWithoutDetailAchatInput[] | AchatUncheckedCreateWithoutDetailAchatInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutDetailAchatInput | AchatCreateOrConnectWithoutDetailAchatInput[]
    createMany?: AchatCreateManyDetailAchatInputEnvelope
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
  }

  export type AchatUncheckedCreateNestedManyWithoutDetailAchatInput = {
    create?: XOR<AchatCreateWithoutDetailAchatInput, AchatUncheckedCreateWithoutDetailAchatInput> | AchatCreateWithoutDetailAchatInput[] | AchatUncheckedCreateWithoutDetailAchatInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutDetailAchatInput | AchatCreateOrConnectWithoutDetailAchatInput[]
    createMany?: AchatCreateManyDetailAchatInputEnvelope
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
  }

  export type ProduitUpdateOneRequiredWithoutDetailAchatNestedInput = {
    create?: XOR<ProduitCreateWithoutDetailAchatInput, ProduitUncheckedCreateWithoutDetailAchatInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutDetailAchatInput
    upsert?: ProduitUpsertWithoutDetailAchatInput
    connect?: ProduitWhereUniqueInput
    update?: XOR<XOR<ProduitUpdateToOneWithWhereWithoutDetailAchatInput, ProduitUpdateWithoutDetailAchatInput>, ProduitUncheckedUpdateWithoutDetailAchatInput>
  }

  export type AchatUpdateManyWithoutDetailAchatNestedInput = {
    create?: XOR<AchatCreateWithoutDetailAchatInput, AchatUncheckedCreateWithoutDetailAchatInput> | AchatCreateWithoutDetailAchatInput[] | AchatUncheckedCreateWithoutDetailAchatInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutDetailAchatInput | AchatCreateOrConnectWithoutDetailAchatInput[]
    upsert?: AchatUpsertWithWhereUniqueWithoutDetailAchatInput | AchatUpsertWithWhereUniqueWithoutDetailAchatInput[]
    createMany?: AchatCreateManyDetailAchatInputEnvelope
    set?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    disconnect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    delete?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    update?: AchatUpdateWithWhereUniqueWithoutDetailAchatInput | AchatUpdateWithWhereUniqueWithoutDetailAchatInput[]
    updateMany?: AchatUpdateManyWithWhereWithoutDetailAchatInput | AchatUpdateManyWithWhereWithoutDetailAchatInput[]
    deleteMany?: AchatScalarWhereInput | AchatScalarWhereInput[]
  }

  export type AchatUncheckedUpdateManyWithoutDetailAchatNestedInput = {
    create?: XOR<AchatCreateWithoutDetailAchatInput, AchatUncheckedCreateWithoutDetailAchatInput> | AchatCreateWithoutDetailAchatInput[] | AchatUncheckedCreateWithoutDetailAchatInput[]
    connectOrCreate?: AchatCreateOrConnectWithoutDetailAchatInput | AchatCreateOrConnectWithoutDetailAchatInput[]
    upsert?: AchatUpsertWithWhereUniqueWithoutDetailAchatInput | AchatUpsertWithWhereUniqueWithoutDetailAchatInput[]
    createMany?: AchatCreateManyDetailAchatInputEnvelope
    set?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    disconnect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    delete?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    connect?: AchatWhereUniqueInput | AchatWhereUniqueInput[]
    update?: AchatUpdateWithWhereUniqueWithoutDetailAchatInput | AchatUpdateWithWhereUniqueWithoutDetailAchatInput[]
    updateMany?: AchatUpdateManyWithWhereWithoutDetailAchatInput | AchatUpdateManyWithWhereWithoutDetailAchatInput[]
    deleteMany?: AchatScalarWhereInput | AchatScalarWhereInput[]
  }

  export type FournisseurCreateNestedOneWithoutAchatInput = {
    create?: XOR<FournisseurCreateWithoutAchatInput, FournisseurUncheckedCreateWithoutAchatInput>
    connectOrCreate?: FournisseurCreateOrConnectWithoutAchatInput
    connect?: FournisseurWhereUniqueInput
  }

  export type DetailAchatCreateNestedOneWithoutAchatInput = {
    create?: XOR<DetailAchatCreateWithoutAchatInput, DetailAchatUncheckedCreateWithoutAchatInput>
    connectOrCreate?: DetailAchatCreateOrConnectWithoutAchatInput
    connect?: DetailAchatWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutAchatInput = {
    create?: XOR<UtilisateurCreateWithoutAchatInput, UtilisateurUncheckedCreateWithoutAchatInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutAchatInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type PaiementCreateNestedOneWithoutAchatInput = {
    create?: XOR<PaiementCreateWithoutAchatInput, PaiementUncheckedCreateWithoutAchatInput>
    connectOrCreate?: PaiementCreateOrConnectWithoutAchatInput
    connect?: PaiementWhereUniqueInput
  }

  export type FournisseurUpdateOneRequiredWithoutAchatNestedInput = {
    create?: XOR<FournisseurCreateWithoutAchatInput, FournisseurUncheckedCreateWithoutAchatInput>
    connectOrCreate?: FournisseurCreateOrConnectWithoutAchatInput
    upsert?: FournisseurUpsertWithoutAchatInput
    connect?: FournisseurWhereUniqueInput
    update?: XOR<XOR<FournisseurUpdateToOneWithWhereWithoutAchatInput, FournisseurUpdateWithoutAchatInput>, FournisseurUncheckedUpdateWithoutAchatInput>
  }

  export type DetailAchatUpdateOneRequiredWithoutAchatNestedInput = {
    create?: XOR<DetailAchatCreateWithoutAchatInput, DetailAchatUncheckedCreateWithoutAchatInput>
    connectOrCreate?: DetailAchatCreateOrConnectWithoutAchatInput
    upsert?: DetailAchatUpsertWithoutAchatInput
    connect?: DetailAchatWhereUniqueInput
    update?: XOR<XOR<DetailAchatUpdateToOneWithWhereWithoutAchatInput, DetailAchatUpdateWithoutAchatInput>, DetailAchatUncheckedUpdateWithoutAchatInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutAchatNestedInput = {
    create?: XOR<UtilisateurCreateWithoutAchatInput, UtilisateurUncheckedCreateWithoutAchatInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutAchatInput
    upsert?: UtilisateurUpsertWithoutAchatInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutAchatInput, UtilisateurUpdateWithoutAchatInput>, UtilisateurUncheckedUpdateWithoutAchatInput>
  }

  export type PaiementUpdateOneRequiredWithoutAchatNestedInput = {
    create?: XOR<PaiementCreateWithoutAchatInput, PaiementUncheckedCreateWithoutAchatInput>
    connectOrCreate?: PaiementCreateOrConnectWithoutAchatInput
    upsert?: PaiementUpsertWithoutAchatInput
    connect?: PaiementWhereUniqueInput
    update?: XOR<XOR<PaiementUpdateToOneWithWhereWithoutAchatInput, PaiementUpdateWithoutAchatInput>, PaiementUncheckedUpdateWithoutAchatInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSexeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexe | EnumSexeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexeNullableFilter<$PrismaModel> | $Enums.Sexe | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumPosteNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Poste | EnumPosteFieldRefInput<$PrismaModel> | null
    in?: $Enums.Poste[] | ListEnumPosteFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Poste[] | ListEnumPosteFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPosteNullableFilter<$PrismaModel> | $Enums.Poste | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumSexeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexe | EnumSexeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sexe | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexeNullableFilter<$PrismaModel>
    _max?: NestedEnumSexeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumPosteNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Poste | EnumPosteFieldRefInput<$PrismaModel> | null
    in?: $Enums.Poste[] | ListEnumPosteFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Poste[] | ListEnumPosteFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPosteNullableWithAggregatesFilter<$PrismaModel> | $Enums.Poste | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPosteNullableFilter<$PrismaModel>
    _max?: NestedEnumPosteNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMoyenPaimentFilter<$PrismaModel = never> = {
    equals?: $Enums.MoyenPaiment | EnumMoyenPaimentFieldRefInput<$PrismaModel>
    in?: $Enums.MoyenPaiment[] | ListEnumMoyenPaimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.MoyenPaiment[] | ListEnumMoyenPaimentFieldRefInput<$PrismaModel>
    not?: NestedEnumMoyenPaimentFilter<$PrismaModel> | $Enums.MoyenPaiment
  }

  export type NestedEnumMoyenPaimentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MoyenPaiment | EnumMoyenPaimentFieldRefInput<$PrismaModel>
    in?: $Enums.MoyenPaiment[] | ListEnumMoyenPaimentFieldRefInput<$PrismaModel>
    notIn?: $Enums.MoyenPaiment[] | ListEnumMoyenPaimentFieldRefInput<$PrismaModel>
    not?: NestedEnumMoyenPaimentWithAggregatesFilter<$PrismaModel> | $Enums.MoyenPaiment
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoyenPaimentFilter<$PrismaModel>
    _max?: NestedEnumMoyenPaimentFilter<$PrismaModel>
  }

  export type VenteCreateWithoutEntrepriseInput = {
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    detailvente: DetailVenteCreateNestedOneWithoutVenteInput
    peiement: PaiementCreateNestedOneWithoutVenteInput
    utilisateur: UtilisateurCreateNestedOneWithoutVenteInput
    Fournisseur?: FournisseurCreateNestedOneWithoutVenteInput
  }

  export type VenteUncheckedCreateWithoutEntrepriseInput = {
    id?: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    detailVenteId: number
    paiementId: number
    clientId: string
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseurId?: number | null
  }

  export type VenteCreateOrConnectWithoutEntrepriseInput = {
    where: VenteWhereUniqueInput
    create: XOR<VenteCreateWithoutEntrepriseInput, VenteUncheckedCreateWithoutEntrepriseInput>
  }

  export type VenteCreateManyEntrepriseInputEnvelope = {
    data: VenteCreateManyEntrepriseInput | VenteCreateManyEntrepriseInput[]
    skipDuplicates?: boolean
  }

  export type VenteUpsertWithWhereUniqueWithoutEntrepriseInput = {
    where: VenteWhereUniqueInput
    update: XOR<VenteUpdateWithoutEntrepriseInput, VenteUncheckedUpdateWithoutEntrepriseInput>
    create: XOR<VenteCreateWithoutEntrepriseInput, VenteUncheckedCreateWithoutEntrepriseInput>
  }

  export type VenteUpdateWithWhereUniqueWithoutEntrepriseInput = {
    where: VenteWhereUniqueInput
    data: XOR<VenteUpdateWithoutEntrepriseInput, VenteUncheckedUpdateWithoutEntrepriseInput>
  }

  export type VenteUpdateManyWithWhereWithoutEntrepriseInput = {
    where: VenteScalarWhereInput
    data: XOR<VenteUpdateManyMutationInput, VenteUncheckedUpdateManyWithoutEntrepriseInput>
  }

  export type VenteScalarWhereInput = {
    AND?: VenteScalarWhereInput | VenteScalarWhereInput[]
    OR?: VenteScalarWhereInput[]
    NOT?: VenteScalarWhereInput | VenteScalarWhereInput[]
    id?: IntFilter<"Vente"> | number
    statut?: StringFilter<"Vente"> | string
    total_ttc?: FloatFilter<"Vente"> | number
    total_ht?: FloatFilter<"Vente"> | number
    remise?: FloatFilter<"Vente"> | number
    detailVenteId?: IntFilter<"Vente"> | number
    paiementId?: IntFilter<"Vente"> | number
    entrepriseId?: IntFilter<"Vente"> | number
    clientId?: StringFilter<"Vente"> | string
    agentId?: StringFilter<"Vente"> | string
    createdAt?: DateTimeFilter<"Vente"> | Date | string
    updatedAt?: DateTimeFilter<"Vente"> | Date | string
    fournisseurId?: IntNullableFilter<"Vente"> | number | null
  }

  export type AdresseCreateWithoutUtilisateurInput = {
    ville: string
    commune: string
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Fournisseur?: FournisseurCreateNestedManyWithoutAdresseInput
  }

  export type AdresseUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    ville: string
    commune: string
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Fournisseur?: FournisseurUncheckedCreateNestedManyWithoutAdresseInput
  }

  export type AdresseCreateOrConnectWithoutUtilisateurInput = {
    where: AdresseWhereUniqueInput
    create: XOR<AdresseCreateWithoutUtilisateurInput, AdresseUncheckedCreateWithoutUtilisateurInput>
  }

  export type AdresseCreateManyUtilisateurInputEnvelope = {
    data: AdresseCreateManyUtilisateurInput | AdresseCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type ContactCreateWithoutUtilisateurInput = {
    tel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Fournisseur?: FournisseurCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    tel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Fournisseur?: FournisseurUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutUtilisateurInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutUtilisateurInput, ContactUncheckedCreateWithoutUtilisateurInput>
  }

  export type ContactCreateManyUtilisateurInputEnvelope = {
    data: ContactCreateManyUtilisateurInput | ContactCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type ProduitCreateWithoutUtilisateurInput = {
    designation: string
    prix: number
    qtte?: number | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teneur: TeneurCreateNestedOneWithoutProduitInput
    DetailVente?: DetailVenteCreateNestedManyWithoutProduitInput
    DetailAchat?: DetailAchatCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    designation: string
    prix: number
    qtte?: number | null
    description: string
    teneurId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    DetailVente?: DetailVenteUncheckedCreateNestedManyWithoutProduitInput
    DetailAchat?: DetailAchatUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutUtilisateurInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutUtilisateurInput, ProduitUncheckedCreateWithoutUtilisateurInput>
  }

  export type ProduitCreateManyUtilisateurInputEnvelope = {
    data: ProduitCreateManyUtilisateurInput | ProduitCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type VenteCreateWithoutUtilisateurInput = {
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    detailvente: DetailVenteCreateNestedOneWithoutVenteInput
    peiement: PaiementCreateNestedOneWithoutVenteInput
    entreprise: EntrepriseCreateNestedOneWithoutVenteInput
    Fournisseur?: FournisseurCreateNestedOneWithoutVenteInput
  }

  export type VenteUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    detailVenteId: number
    paiementId: number
    entrepriseId: number
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseurId?: number | null
  }

  export type VenteCreateOrConnectWithoutUtilisateurInput = {
    where: VenteWhereUniqueInput
    create: XOR<VenteCreateWithoutUtilisateurInput, VenteUncheckedCreateWithoutUtilisateurInput>
  }

  export type VenteCreateManyUtilisateurInputEnvelope = {
    data: VenteCreateManyUtilisateurInput | VenteCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type AchatCreateWithoutAgentInput = {
    statut: string
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseur: FournisseurCreateNestedOneWithoutAchatInput
    detailAchat: DetailAchatCreateNestedOneWithoutAchatInput
    paiement: PaiementCreateNestedOneWithoutAchatInput
  }

  export type AchatUncheckedCreateWithoutAgentInput = {
    id?: number
    statut: string
    fournisseurId: number
    total: number
    detailAchatId: number
    paiementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchatCreateOrConnectWithoutAgentInput = {
    where: AchatWhereUniqueInput
    create: XOR<AchatCreateWithoutAgentInput, AchatUncheckedCreateWithoutAgentInput>
  }

  export type AchatCreateManyAgentInputEnvelope = {
    data: AchatCreateManyAgentInput | AchatCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type AdresseUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: AdresseWhereUniqueInput
    update: XOR<AdresseUpdateWithoutUtilisateurInput, AdresseUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<AdresseCreateWithoutUtilisateurInput, AdresseUncheckedCreateWithoutUtilisateurInput>
  }

  export type AdresseUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: AdresseWhereUniqueInput
    data: XOR<AdresseUpdateWithoutUtilisateurInput, AdresseUncheckedUpdateWithoutUtilisateurInput>
  }

  export type AdresseUpdateManyWithWhereWithoutUtilisateurInput = {
    where: AdresseScalarWhereInput
    data: XOR<AdresseUpdateManyMutationInput, AdresseUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type AdresseScalarWhereInput = {
    AND?: AdresseScalarWhereInput | AdresseScalarWhereInput[]
    OR?: AdresseScalarWhereInput[]
    NOT?: AdresseScalarWhereInput | AdresseScalarWhereInput[]
    id?: IntFilter<"Adresse"> | number
    ville?: StringFilter<"Adresse"> | string
    commune?: StringFilter<"Adresse"> | string
    adresse?: StringFilter<"Adresse"> | string
    utilisateurId?: StringFilter<"Adresse"> | string
    createdAt?: DateTimeFilter<"Adresse"> | Date | string
    updatedAt?: DateTimeFilter<"Adresse"> | Date | string
  }

  export type ContactUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutUtilisateurInput, ContactUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<ContactCreateWithoutUtilisateurInput, ContactUncheckedCreateWithoutUtilisateurInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutUtilisateurInput, ContactUncheckedUpdateWithoutUtilisateurInput>
  }

  export type ContactUpdateManyWithWhereWithoutUtilisateurInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    id?: IntFilter<"Contact"> | number
    tel?: StringFilter<"Contact"> | string
    utilisateurId?: StringFilter<"Contact"> | string
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ProduitUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: ProduitWhereUniqueInput
    update: XOR<ProduitUpdateWithoutUtilisateurInput, ProduitUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<ProduitCreateWithoutUtilisateurInput, ProduitUncheckedCreateWithoutUtilisateurInput>
  }

  export type ProduitUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: ProduitWhereUniqueInput
    data: XOR<ProduitUpdateWithoutUtilisateurInput, ProduitUncheckedUpdateWithoutUtilisateurInput>
  }

  export type ProduitUpdateManyWithWhereWithoutUtilisateurInput = {
    where: ProduitScalarWhereInput
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type ProduitScalarWhereInput = {
    AND?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
    OR?: ProduitScalarWhereInput[]
    NOT?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
    id?: IntFilter<"Produit"> | number
    designation?: StringFilter<"Produit"> | string
    prix?: FloatFilter<"Produit"> | number
    qtte?: IntNullableFilter<"Produit"> | number | null
    description?: StringFilter<"Produit"> | string
    teneurId?: IntFilter<"Produit"> | number
    utilisateurId?: StringFilter<"Produit"> | string
    createdAt?: DateTimeFilter<"Produit"> | Date | string
    updatedAt?: DateTimeFilter<"Produit"> | Date | string
  }

  export type VenteUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: VenteWhereUniqueInput
    update: XOR<VenteUpdateWithoutUtilisateurInput, VenteUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<VenteCreateWithoutUtilisateurInput, VenteUncheckedCreateWithoutUtilisateurInput>
  }

  export type VenteUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: VenteWhereUniqueInput
    data: XOR<VenteUpdateWithoutUtilisateurInput, VenteUncheckedUpdateWithoutUtilisateurInput>
  }

  export type VenteUpdateManyWithWhereWithoutUtilisateurInput = {
    where: VenteScalarWhereInput
    data: XOR<VenteUpdateManyMutationInput, VenteUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type AchatUpsertWithWhereUniqueWithoutAgentInput = {
    where: AchatWhereUniqueInput
    update: XOR<AchatUpdateWithoutAgentInput, AchatUncheckedUpdateWithoutAgentInput>
    create: XOR<AchatCreateWithoutAgentInput, AchatUncheckedCreateWithoutAgentInput>
  }

  export type AchatUpdateWithWhereUniqueWithoutAgentInput = {
    where: AchatWhereUniqueInput
    data: XOR<AchatUpdateWithoutAgentInput, AchatUncheckedUpdateWithoutAgentInput>
  }

  export type AchatUpdateManyWithWhereWithoutAgentInput = {
    where: AchatScalarWhereInput
    data: XOR<AchatUpdateManyMutationInput, AchatUncheckedUpdateManyWithoutAgentInput>
  }

  export type AchatScalarWhereInput = {
    AND?: AchatScalarWhereInput | AchatScalarWhereInput[]
    OR?: AchatScalarWhereInput[]
    NOT?: AchatScalarWhereInput | AchatScalarWhereInput[]
    id?: IntFilter<"Achat"> | number
    statut?: StringFilter<"Achat"> | string
    fournisseurId?: IntFilter<"Achat"> | number
    total?: FloatFilter<"Achat"> | number
    detailAchatId?: IntFilter<"Achat"> | number
    agentId?: StringFilter<"Achat"> | string
    paiementId?: IntFilter<"Achat"> | number
    createdAt?: DateTimeFilter<"Achat"> | Date | string
    updatedAt?: DateTimeFilter<"Achat"> | Date | string
  }

  export type UtilisateurCreateWithoutAdresseInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Contact?: ContactCreateNestedManyWithoutUtilisateurInput
    Produit?: ProduitCreateNestedManyWithoutUtilisateurInput
    Vente?: VenteCreateNestedManyWithoutUtilisateurInput
    Achat?: AchatCreateNestedManyWithoutAgentInput
  }

  export type UtilisateurUncheckedCreateWithoutAdresseInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Contact?: ContactUncheckedCreateNestedManyWithoutUtilisateurInput
    Produit?: ProduitUncheckedCreateNestedManyWithoutUtilisateurInput
    Vente?: VenteUncheckedCreateNestedManyWithoutUtilisateurInput
    Achat?: AchatUncheckedCreateNestedManyWithoutAgentInput
  }

  export type UtilisateurCreateOrConnectWithoutAdresseInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutAdresseInput, UtilisateurUncheckedCreateWithoutAdresseInput>
  }

  export type FournisseurCreateWithoutAdresseInput = {
    nom: string
    email: string
    code_postal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    contact: ContactCreateNestedOneWithoutFournisseurInput
    Vente?: VenteCreateNestedManyWithoutFournisseurInput
    Achat?: AchatCreateNestedManyWithoutFournisseurInput
  }

  export type FournisseurUncheckedCreateWithoutAdresseInput = {
    id?: number
    nom: string
    email: string
    code_postal?: string | null
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Vente?: VenteUncheckedCreateNestedManyWithoutFournisseurInput
    Achat?: AchatUncheckedCreateNestedManyWithoutFournisseurInput
  }

  export type FournisseurCreateOrConnectWithoutAdresseInput = {
    where: FournisseurWhereUniqueInput
    create: XOR<FournisseurCreateWithoutAdresseInput, FournisseurUncheckedCreateWithoutAdresseInput>
  }

  export type FournisseurCreateManyAdresseInputEnvelope = {
    data: FournisseurCreateManyAdresseInput | FournisseurCreateManyAdresseInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateurUpsertWithoutAdresseInput = {
    update: XOR<UtilisateurUpdateWithoutAdresseInput, UtilisateurUncheckedUpdateWithoutAdresseInput>
    create: XOR<UtilisateurCreateWithoutAdresseInput, UtilisateurUncheckedCreateWithoutAdresseInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutAdresseInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutAdresseInput, UtilisateurUncheckedUpdateWithoutAdresseInput>
  }

  export type UtilisateurUpdateWithoutAdresseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Contact?: ContactUpdateManyWithoutUtilisateurNestedInput
    Produit?: ProduitUpdateManyWithoutUtilisateurNestedInput
    Vente?: VenteUpdateManyWithoutUtilisateurNestedInput
    Achat?: AchatUpdateManyWithoutAgentNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutAdresseInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Contact?: ContactUncheckedUpdateManyWithoutUtilisateurNestedInput
    Produit?: ProduitUncheckedUpdateManyWithoutUtilisateurNestedInput
    Vente?: VenteUncheckedUpdateManyWithoutUtilisateurNestedInput
    Achat?: AchatUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type FournisseurUpsertWithWhereUniqueWithoutAdresseInput = {
    where: FournisseurWhereUniqueInput
    update: XOR<FournisseurUpdateWithoutAdresseInput, FournisseurUncheckedUpdateWithoutAdresseInput>
    create: XOR<FournisseurCreateWithoutAdresseInput, FournisseurUncheckedCreateWithoutAdresseInput>
  }

  export type FournisseurUpdateWithWhereUniqueWithoutAdresseInput = {
    where: FournisseurWhereUniqueInput
    data: XOR<FournisseurUpdateWithoutAdresseInput, FournisseurUncheckedUpdateWithoutAdresseInput>
  }

  export type FournisseurUpdateManyWithWhereWithoutAdresseInput = {
    where: FournisseurScalarWhereInput
    data: XOR<FournisseurUpdateManyMutationInput, FournisseurUncheckedUpdateManyWithoutAdresseInput>
  }

  export type FournisseurScalarWhereInput = {
    AND?: FournisseurScalarWhereInput | FournisseurScalarWhereInput[]
    OR?: FournisseurScalarWhereInput[]
    NOT?: FournisseurScalarWhereInput | FournisseurScalarWhereInput[]
    id?: IntFilter<"Fournisseur"> | number
    nom?: StringFilter<"Fournisseur"> | string
    email?: StringFilter<"Fournisseur"> | string
    code_postal?: StringNullableFilter<"Fournisseur"> | string | null
    adresseId?: IntFilter<"Fournisseur"> | number
    contactId?: IntFilter<"Fournisseur"> | number
    createdAt?: DateTimeFilter<"Fournisseur"> | Date | string
    updatedAt?: DateTimeFilter<"Fournisseur"> | Date | string
  }

  export type UtilisateurCreateWithoutContactInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adresse?: AdresseCreateNestedManyWithoutUtilisateurInput
    Produit?: ProduitCreateNestedManyWithoutUtilisateurInput
    Vente?: VenteCreateNestedManyWithoutUtilisateurInput
    Achat?: AchatCreateNestedManyWithoutAgentInput
  }

  export type UtilisateurUncheckedCreateWithoutContactInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adresse?: AdresseUncheckedCreateNestedManyWithoutUtilisateurInput
    Produit?: ProduitUncheckedCreateNestedManyWithoutUtilisateurInput
    Vente?: VenteUncheckedCreateNestedManyWithoutUtilisateurInput
    Achat?: AchatUncheckedCreateNestedManyWithoutAgentInput
  }

  export type UtilisateurCreateOrConnectWithoutContactInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutContactInput, UtilisateurUncheckedCreateWithoutContactInput>
  }

  export type FournisseurCreateWithoutContactInput = {
    nom: string
    email: string
    code_postal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    adresse: AdresseCreateNestedOneWithoutFournisseurInput
    Vente?: VenteCreateNestedManyWithoutFournisseurInput
    Achat?: AchatCreateNestedManyWithoutFournisseurInput
  }

  export type FournisseurUncheckedCreateWithoutContactInput = {
    id?: number
    nom: string
    email: string
    code_postal?: string | null
    adresseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Vente?: VenteUncheckedCreateNestedManyWithoutFournisseurInput
    Achat?: AchatUncheckedCreateNestedManyWithoutFournisseurInput
  }

  export type FournisseurCreateOrConnectWithoutContactInput = {
    where: FournisseurWhereUniqueInput
    create: XOR<FournisseurCreateWithoutContactInput, FournisseurUncheckedCreateWithoutContactInput>
  }

  export type FournisseurCreateManyContactInputEnvelope = {
    data: FournisseurCreateManyContactInput | FournisseurCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateurUpsertWithoutContactInput = {
    update: XOR<UtilisateurUpdateWithoutContactInput, UtilisateurUncheckedUpdateWithoutContactInput>
    create: XOR<UtilisateurCreateWithoutContactInput, UtilisateurUncheckedCreateWithoutContactInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutContactInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutContactInput, UtilisateurUncheckedUpdateWithoutContactInput>
  }

  export type UtilisateurUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adresse?: AdresseUpdateManyWithoutUtilisateurNestedInput
    Produit?: ProduitUpdateManyWithoutUtilisateurNestedInput
    Vente?: VenteUpdateManyWithoutUtilisateurNestedInput
    Achat?: AchatUpdateManyWithoutAgentNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adresse?: AdresseUncheckedUpdateManyWithoutUtilisateurNestedInput
    Produit?: ProduitUncheckedUpdateManyWithoutUtilisateurNestedInput
    Vente?: VenteUncheckedUpdateManyWithoutUtilisateurNestedInput
    Achat?: AchatUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type FournisseurUpsertWithWhereUniqueWithoutContactInput = {
    where: FournisseurWhereUniqueInput
    update: XOR<FournisseurUpdateWithoutContactInput, FournisseurUncheckedUpdateWithoutContactInput>
    create: XOR<FournisseurCreateWithoutContactInput, FournisseurUncheckedCreateWithoutContactInput>
  }

  export type FournisseurUpdateWithWhereUniqueWithoutContactInput = {
    where: FournisseurWhereUniqueInput
    data: XOR<FournisseurUpdateWithoutContactInput, FournisseurUncheckedUpdateWithoutContactInput>
  }

  export type FournisseurUpdateManyWithWhereWithoutContactInput = {
    where: FournisseurScalarWhereInput
    data: XOR<FournisseurUpdateManyMutationInput, FournisseurUncheckedUpdateManyWithoutContactInput>
  }

  export type AdresseCreateWithoutFournisseurInput = {
    ville: string
    commune: string
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutAdresseInput
  }

  export type AdresseUncheckedCreateWithoutFournisseurInput = {
    id?: number
    ville: string
    commune: string
    adresse: string
    utilisateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdresseCreateOrConnectWithoutFournisseurInput = {
    where: AdresseWhereUniqueInput
    create: XOR<AdresseCreateWithoutFournisseurInput, AdresseUncheckedCreateWithoutFournisseurInput>
  }

  export type ContactCreateWithoutFournisseurInput = {
    tel: string
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutFournisseurInput = {
    id?: number
    tel: string
    utilisateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactCreateOrConnectWithoutFournisseurInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutFournisseurInput, ContactUncheckedCreateWithoutFournisseurInput>
  }

  export type VenteCreateWithoutFournisseurInput = {
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    detailvente: DetailVenteCreateNestedOneWithoutVenteInput
    peiement: PaiementCreateNestedOneWithoutVenteInput
    entreprise: EntrepriseCreateNestedOneWithoutVenteInput
    utilisateur: UtilisateurCreateNestedOneWithoutVenteInput
  }

  export type VenteUncheckedCreateWithoutFournisseurInput = {
    id?: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    detailVenteId: number
    paiementId: number
    entrepriseId: number
    clientId: string
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenteCreateOrConnectWithoutFournisseurInput = {
    where: VenteWhereUniqueInput
    create: XOR<VenteCreateWithoutFournisseurInput, VenteUncheckedCreateWithoutFournisseurInput>
  }

  export type VenteCreateManyFournisseurInputEnvelope = {
    data: VenteCreateManyFournisseurInput | VenteCreateManyFournisseurInput[]
    skipDuplicates?: boolean
  }

  export type AchatCreateWithoutFournisseurInput = {
    statut: string
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detailAchat: DetailAchatCreateNestedOneWithoutAchatInput
    agent: UtilisateurCreateNestedOneWithoutAchatInput
    paiement: PaiementCreateNestedOneWithoutAchatInput
  }

  export type AchatUncheckedCreateWithoutFournisseurInput = {
    id?: number
    statut: string
    total: number
    detailAchatId: number
    agentId: string
    paiementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchatCreateOrConnectWithoutFournisseurInput = {
    where: AchatWhereUniqueInput
    create: XOR<AchatCreateWithoutFournisseurInput, AchatUncheckedCreateWithoutFournisseurInput>
  }

  export type AchatCreateManyFournisseurInputEnvelope = {
    data: AchatCreateManyFournisseurInput | AchatCreateManyFournisseurInput[]
    skipDuplicates?: boolean
  }

  export type AdresseUpsertWithoutFournisseurInput = {
    update: XOR<AdresseUpdateWithoutFournisseurInput, AdresseUncheckedUpdateWithoutFournisseurInput>
    create: XOR<AdresseCreateWithoutFournisseurInput, AdresseUncheckedCreateWithoutFournisseurInput>
    where?: AdresseWhereInput
  }

  export type AdresseUpdateToOneWithWhereWithoutFournisseurInput = {
    where?: AdresseWhereInput
    data: XOR<AdresseUpdateWithoutFournisseurInput, AdresseUncheckedUpdateWithoutFournisseurInput>
  }

  export type AdresseUpdateWithoutFournisseurInput = {
    ville?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutAdresseNestedInput
  }

  export type AdresseUncheckedUpdateWithoutFournisseurInput = {
    id?: IntFieldUpdateOperationsInput | number
    ville?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUpsertWithoutFournisseurInput = {
    update: XOR<ContactUpdateWithoutFournisseurInput, ContactUncheckedUpdateWithoutFournisseurInput>
    create: XOR<ContactCreateWithoutFournisseurInput, ContactUncheckedCreateWithoutFournisseurInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutFournisseurInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutFournisseurInput, ContactUncheckedUpdateWithoutFournisseurInput>
  }

  export type ContactUpdateWithoutFournisseurInput = {
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutFournisseurInput = {
    id?: IntFieldUpdateOperationsInput | number
    tel?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenteUpsertWithWhereUniqueWithoutFournisseurInput = {
    where: VenteWhereUniqueInput
    update: XOR<VenteUpdateWithoutFournisseurInput, VenteUncheckedUpdateWithoutFournisseurInput>
    create: XOR<VenteCreateWithoutFournisseurInput, VenteUncheckedCreateWithoutFournisseurInput>
  }

  export type VenteUpdateWithWhereUniqueWithoutFournisseurInput = {
    where: VenteWhereUniqueInput
    data: XOR<VenteUpdateWithoutFournisseurInput, VenteUncheckedUpdateWithoutFournisseurInput>
  }

  export type VenteUpdateManyWithWhereWithoutFournisseurInput = {
    where: VenteScalarWhereInput
    data: XOR<VenteUpdateManyMutationInput, VenteUncheckedUpdateManyWithoutFournisseurInput>
  }

  export type AchatUpsertWithWhereUniqueWithoutFournisseurInput = {
    where: AchatWhereUniqueInput
    update: XOR<AchatUpdateWithoutFournisseurInput, AchatUncheckedUpdateWithoutFournisseurInput>
    create: XOR<AchatCreateWithoutFournisseurInput, AchatUncheckedCreateWithoutFournisseurInput>
  }

  export type AchatUpdateWithWhereUniqueWithoutFournisseurInput = {
    where: AchatWhereUniqueInput
    data: XOR<AchatUpdateWithoutFournisseurInput, AchatUncheckedUpdateWithoutFournisseurInput>
  }

  export type AchatUpdateManyWithWhereWithoutFournisseurInput = {
    where: AchatScalarWhereInput
    data: XOR<AchatUpdateManyMutationInput, AchatUncheckedUpdateManyWithoutFournisseurInput>
  }

  export type ProduitCreateWithoutTeneurInput = {
    designation: string
    prix: number
    qtte?: number | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutProduitInput
    DetailVente?: DetailVenteCreateNestedManyWithoutProduitInput
    DetailAchat?: DetailAchatCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutTeneurInput = {
    id?: number
    designation: string
    prix: number
    qtte?: number | null
    description: string
    utilisateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    DetailVente?: DetailVenteUncheckedCreateNestedManyWithoutProduitInput
    DetailAchat?: DetailAchatUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutTeneurInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutTeneurInput, ProduitUncheckedCreateWithoutTeneurInput>
  }

  export type ProduitCreateManyTeneurInputEnvelope = {
    data: ProduitCreateManyTeneurInput | ProduitCreateManyTeneurInput[]
    skipDuplicates?: boolean
  }

  export type ProduitUpsertWithWhereUniqueWithoutTeneurInput = {
    where: ProduitWhereUniqueInput
    update: XOR<ProduitUpdateWithoutTeneurInput, ProduitUncheckedUpdateWithoutTeneurInput>
    create: XOR<ProduitCreateWithoutTeneurInput, ProduitUncheckedCreateWithoutTeneurInput>
  }

  export type ProduitUpdateWithWhereUniqueWithoutTeneurInput = {
    where: ProduitWhereUniqueInput
    data: XOR<ProduitUpdateWithoutTeneurInput, ProduitUncheckedUpdateWithoutTeneurInput>
  }

  export type ProduitUpdateManyWithWhereWithoutTeneurInput = {
    where: ProduitScalarWhereInput
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyWithoutTeneurInput>
  }

  export type TeneurCreateWithoutProduitInput = {
    valeur: number
  }

  export type TeneurUncheckedCreateWithoutProduitInput = {
    id?: number
    valeur: number
  }

  export type TeneurCreateOrConnectWithoutProduitInput = {
    where: TeneurWhereUniqueInput
    create: XOR<TeneurCreateWithoutProduitInput, TeneurUncheckedCreateWithoutProduitInput>
  }

  export type UtilisateurCreateWithoutProduitInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adresse?: AdresseCreateNestedManyWithoutUtilisateurInput
    Contact?: ContactCreateNestedManyWithoutUtilisateurInput
    Vente?: VenteCreateNestedManyWithoutUtilisateurInput
    Achat?: AchatCreateNestedManyWithoutAgentInput
  }

  export type UtilisateurUncheckedCreateWithoutProduitInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adresse?: AdresseUncheckedCreateNestedManyWithoutUtilisateurInput
    Contact?: ContactUncheckedCreateNestedManyWithoutUtilisateurInput
    Vente?: VenteUncheckedCreateNestedManyWithoutUtilisateurInput
    Achat?: AchatUncheckedCreateNestedManyWithoutAgentInput
  }

  export type UtilisateurCreateOrConnectWithoutProduitInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutProduitInput, UtilisateurUncheckedCreateWithoutProduitInput>
  }

  export type DetailVenteCreateWithoutProduitInput = {
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Vente?: VenteCreateNestedManyWithoutDetailventeInput
  }

  export type DetailVenteUncheckedCreateWithoutProduitInput = {
    id?: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Vente?: VenteUncheckedCreateNestedManyWithoutDetailventeInput
  }

  export type DetailVenteCreateOrConnectWithoutProduitInput = {
    where: DetailVenteWhereUniqueInput
    create: XOR<DetailVenteCreateWithoutProduitInput, DetailVenteUncheckedCreateWithoutProduitInput>
  }

  export type DetailVenteCreateManyProduitInputEnvelope = {
    data: DetailVenteCreateManyProduitInput | DetailVenteCreateManyProduitInput[]
    skipDuplicates?: boolean
  }

  export type DetailAchatCreateWithoutProduitInput = {
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Achat?: AchatCreateNestedManyWithoutDetailAchatInput
  }

  export type DetailAchatUncheckedCreateWithoutProduitInput = {
    id?: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Achat?: AchatUncheckedCreateNestedManyWithoutDetailAchatInput
  }

  export type DetailAchatCreateOrConnectWithoutProduitInput = {
    where: DetailAchatWhereUniqueInput
    create: XOR<DetailAchatCreateWithoutProduitInput, DetailAchatUncheckedCreateWithoutProduitInput>
  }

  export type DetailAchatCreateManyProduitInputEnvelope = {
    data: DetailAchatCreateManyProduitInput | DetailAchatCreateManyProduitInput[]
    skipDuplicates?: boolean
  }

  export type TeneurUpsertWithoutProduitInput = {
    update: XOR<TeneurUpdateWithoutProduitInput, TeneurUncheckedUpdateWithoutProduitInput>
    create: XOR<TeneurCreateWithoutProduitInput, TeneurUncheckedCreateWithoutProduitInput>
    where?: TeneurWhereInput
  }

  export type TeneurUpdateToOneWithWhereWithoutProduitInput = {
    where?: TeneurWhereInput
    data: XOR<TeneurUpdateWithoutProduitInput, TeneurUncheckedUpdateWithoutProduitInput>
  }

  export type TeneurUpdateWithoutProduitInput = {
    valeur?: FloatFieldUpdateOperationsInput | number
  }

  export type TeneurUncheckedUpdateWithoutProduitInput = {
    id?: IntFieldUpdateOperationsInput | number
    valeur?: FloatFieldUpdateOperationsInput | number
  }

  export type UtilisateurUpsertWithoutProduitInput = {
    update: XOR<UtilisateurUpdateWithoutProduitInput, UtilisateurUncheckedUpdateWithoutProduitInput>
    create: XOR<UtilisateurCreateWithoutProduitInput, UtilisateurUncheckedCreateWithoutProduitInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutProduitInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutProduitInput, UtilisateurUncheckedUpdateWithoutProduitInput>
  }

  export type UtilisateurUpdateWithoutProduitInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adresse?: AdresseUpdateManyWithoutUtilisateurNestedInput
    Contact?: ContactUpdateManyWithoutUtilisateurNestedInput
    Vente?: VenteUpdateManyWithoutUtilisateurNestedInput
    Achat?: AchatUpdateManyWithoutAgentNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutProduitInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adresse?: AdresseUncheckedUpdateManyWithoutUtilisateurNestedInput
    Contact?: ContactUncheckedUpdateManyWithoutUtilisateurNestedInput
    Vente?: VenteUncheckedUpdateManyWithoutUtilisateurNestedInput
    Achat?: AchatUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type DetailVenteUpsertWithWhereUniqueWithoutProduitInput = {
    where: DetailVenteWhereUniqueInput
    update: XOR<DetailVenteUpdateWithoutProduitInput, DetailVenteUncheckedUpdateWithoutProduitInput>
    create: XOR<DetailVenteCreateWithoutProduitInput, DetailVenteUncheckedCreateWithoutProduitInput>
  }

  export type DetailVenteUpdateWithWhereUniqueWithoutProduitInput = {
    where: DetailVenteWhereUniqueInput
    data: XOR<DetailVenteUpdateWithoutProduitInput, DetailVenteUncheckedUpdateWithoutProduitInput>
  }

  export type DetailVenteUpdateManyWithWhereWithoutProduitInput = {
    where: DetailVenteScalarWhereInput
    data: XOR<DetailVenteUpdateManyMutationInput, DetailVenteUncheckedUpdateManyWithoutProduitInput>
  }

  export type DetailVenteScalarWhereInput = {
    AND?: DetailVenteScalarWhereInput | DetailVenteScalarWhereInput[]
    OR?: DetailVenteScalarWhereInput[]
    NOT?: DetailVenteScalarWhereInput | DetailVenteScalarWhereInput[]
    id?: IntFilter<"DetailVente"> | number
    produitId?: IntFilter<"DetailVente"> | number
    qtte?: IntFilter<"DetailVente"> | number
    prixUnitaire?: FloatFilter<"DetailVente"> | number
    prixTotal?: FloatFilter<"DetailVente"> | number
    createdAt?: DateTimeFilter<"DetailVente"> | Date | string
    updatedAt?: DateTimeFilter<"DetailVente"> | Date | string
  }

  export type DetailAchatUpsertWithWhereUniqueWithoutProduitInput = {
    where: DetailAchatWhereUniqueInput
    update: XOR<DetailAchatUpdateWithoutProduitInput, DetailAchatUncheckedUpdateWithoutProduitInput>
    create: XOR<DetailAchatCreateWithoutProduitInput, DetailAchatUncheckedCreateWithoutProduitInput>
  }

  export type DetailAchatUpdateWithWhereUniqueWithoutProduitInput = {
    where: DetailAchatWhereUniqueInput
    data: XOR<DetailAchatUpdateWithoutProduitInput, DetailAchatUncheckedUpdateWithoutProduitInput>
  }

  export type DetailAchatUpdateManyWithWhereWithoutProduitInput = {
    where: DetailAchatScalarWhereInput
    data: XOR<DetailAchatUpdateManyMutationInput, DetailAchatUncheckedUpdateManyWithoutProduitInput>
  }

  export type DetailAchatScalarWhereInput = {
    AND?: DetailAchatScalarWhereInput | DetailAchatScalarWhereInput[]
    OR?: DetailAchatScalarWhereInput[]
    NOT?: DetailAchatScalarWhereInput | DetailAchatScalarWhereInput[]
    id?: IntFilter<"DetailAchat"> | number
    produitId?: IntFilter<"DetailAchat"> | number
    qtte?: IntFilter<"DetailAchat"> | number
    prixUnitaire?: FloatFilter<"DetailAchat"> | number
    prixTotal?: FloatFilter<"DetailAchat"> | number
    createdAt?: DateTimeFilter<"DetailAchat"> | Date | string
    updatedAt?: DateTimeFilter<"DetailAchat"> | Date | string
  }

  export type ProduitCreateWithoutDetailVenteInput = {
    designation: string
    prix: number
    qtte?: number | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teneur: TeneurCreateNestedOneWithoutProduitInput
    utilisateur: UtilisateurCreateNestedOneWithoutProduitInput
    DetailAchat?: DetailAchatCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutDetailVenteInput = {
    id?: number
    designation: string
    prix: number
    qtte?: number | null
    description: string
    teneurId: number
    utilisateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    DetailAchat?: DetailAchatUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutDetailVenteInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutDetailVenteInput, ProduitUncheckedCreateWithoutDetailVenteInput>
  }

  export type VenteCreateWithoutDetailventeInput = {
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    peiement: PaiementCreateNestedOneWithoutVenteInput
    entreprise: EntrepriseCreateNestedOneWithoutVenteInput
    utilisateur: UtilisateurCreateNestedOneWithoutVenteInput
    Fournisseur?: FournisseurCreateNestedOneWithoutVenteInput
  }

  export type VenteUncheckedCreateWithoutDetailventeInput = {
    id?: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    paiementId: number
    entrepriseId: number
    clientId: string
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseurId?: number | null
  }

  export type VenteCreateOrConnectWithoutDetailventeInput = {
    where: VenteWhereUniqueInput
    create: XOR<VenteCreateWithoutDetailventeInput, VenteUncheckedCreateWithoutDetailventeInput>
  }

  export type VenteCreateManyDetailventeInputEnvelope = {
    data: VenteCreateManyDetailventeInput | VenteCreateManyDetailventeInput[]
    skipDuplicates?: boolean
  }

  export type ProduitUpsertWithoutDetailVenteInput = {
    update: XOR<ProduitUpdateWithoutDetailVenteInput, ProduitUncheckedUpdateWithoutDetailVenteInput>
    create: XOR<ProduitCreateWithoutDetailVenteInput, ProduitUncheckedCreateWithoutDetailVenteInput>
    where?: ProduitWhereInput
  }

  export type ProduitUpdateToOneWithWhereWithoutDetailVenteInput = {
    where?: ProduitWhereInput
    data: XOR<ProduitUpdateWithoutDetailVenteInput, ProduitUncheckedUpdateWithoutDetailVenteInput>
  }

  export type ProduitUpdateWithoutDetailVenteInput = {
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teneur?: TeneurUpdateOneRequiredWithoutProduitNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutProduitNestedInput
    DetailAchat?: DetailAchatUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutDetailVenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    teneurId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetailAchat?: DetailAchatUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type VenteUpsertWithWhereUniqueWithoutDetailventeInput = {
    where: VenteWhereUniqueInput
    update: XOR<VenteUpdateWithoutDetailventeInput, VenteUncheckedUpdateWithoutDetailventeInput>
    create: XOR<VenteCreateWithoutDetailventeInput, VenteUncheckedCreateWithoutDetailventeInput>
  }

  export type VenteUpdateWithWhereUniqueWithoutDetailventeInput = {
    where: VenteWhereUniqueInput
    data: XOR<VenteUpdateWithoutDetailventeInput, VenteUncheckedUpdateWithoutDetailventeInput>
  }

  export type VenteUpdateManyWithWhereWithoutDetailventeInput = {
    where: VenteScalarWhereInput
    data: XOR<VenteUpdateManyMutationInput, VenteUncheckedUpdateManyWithoutDetailventeInput>
  }

  export type VenteCreateWithoutPeiementInput = {
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    detailvente: DetailVenteCreateNestedOneWithoutVenteInput
    entreprise: EntrepriseCreateNestedOneWithoutVenteInput
    utilisateur: UtilisateurCreateNestedOneWithoutVenteInput
    Fournisseur?: FournisseurCreateNestedOneWithoutVenteInput
  }

  export type VenteUncheckedCreateWithoutPeiementInput = {
    id?: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    detailVenteId: number
    entrepriseId: number
    clientId: string
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseurId?: number | null
  }

  export type VenteCreateOrConnectWithoutPeiementInput = {
    where: VenteWhereUniqueInput
    create: XOR<VenteCreateWithoutPeiementInput, VenteUncheckedCreateWithoutPeiementInput>
  }

  export type VenteCreateManyPeiementInputEnvelope = {
    data: VenteCreateManyPeiementInput | VenteCreateManyPeiementInput[]
    skipDuplicates?: boolean
  }

  export type AchatCreateWithoutPaiementInput = {
    statut: string
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseur: FournisseurCreateNestedOneWithoutAchatInput
    detailAchat: DetailAchatCreateNestedOneWithoutAchatInput
    agent: UtilisateurCreateNestedOneWithoutAchatInput
  }

  export type AchatUncheckedCreateWithoutPaiementInput = {
    id?: number
    statut: string
    fournisseurId: number
    total: number
    detailAchatId: number
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchatCreateOrConnectWithoutPaiementInput = {
    where: AchatWhereUniqueInput
    create: XOR<AchatCreateWithoutPaiementInput, AchatUncheckedCreateWithoutPaiementInput>
  }

  export type AchatCreateManyPaiementInputEnvelope = {
    data: AchatCreateManyPaiementInput | AchatCreateManyPaiementInput[]
    skipDuplicates?: boolean
  }

  export type VenteUpsertWithWhereUniqueWithoutPeiementInput = {
    where: VenteWhereUniqueInput
    update: XOR<VenteUpdateWithoutPeiementInput, VenteUncheckedUpdateWithoutPeiementInput>
    create: XOR<VenteCreateWithoutPeiementInput, VenteUncheckedCreateWithoutPeiementInput>
  }

  export type VenteUpdateWithWhereUniqueWithoutPeiementInput = {
    where: VenteWhereUniqueInput
    data: XOR<VenteUpdateWithoutPeiementInput, VenteUncheckedUpdateWithoutPeiementInput>
  }

  export type VenteUpdateManyWithWhereWithoutPeiementInput = {
    where: VenteScalarWhereInput
    data: XOR<VenteUpdateManyMutationInput, VenteUncheckedUpdateManyWithoutPeiementInput>
  }

  export type AchatUpsertWithWhereUniqueWithoutPaiementInput = {
    where: AchatWhereUniqueInput
    update: XOR<AchatUpdateWithoutPaiementInput, AchatUncheckedUpdateWithoutPaiementInput>
    create: XOR<AchatCreateWithoutPaiementInput, AchatUncheckedCreateWithoutPaiementInput>
  }

  export type AchatUpdateWithWhereUniqueWithoutPaiementInput = {
    where: AchatWhereUniqueInput
    data: XOR<AchatUpdateWithoutPaiementInput, AchatUncheckedUpdateWithoutPaiementInput>
  }

  export type AchatUpdateManyWithWhereWithoutPaiementInput = {
    where: AchatScalarWhereInput
    data: XOR<AchatUpdateManyMutationInput, AchatUncheckedUpdateManyWithoutPaiementInput>
  }

  export type DetailVenteCreateWithoutVenteInput = {
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    produit: ProduitCreateNestedOneWithoutDetailVenteInput
  }

  export type DetailVenteUncheckedCreateWithoutVenteInput = {
    id?: number
    produitId: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DetailVenteCreateOrConnectWithoutVenteInput = {
    where: DetailVenteWhereUniqueInput
    create: XOR<DetailVenteCreateWithoutVenteInput, DetailVenteUncheckedCreateWithoutVenteInput>
  }

  export type PaiementCreateWithoutVenteInput = {
    montant: number
    moyen_paiement?: $Enums.MoyenPaiment
    createdAt?: Date | string
    updatedAt?: Date | string
    Achat?: AchatCreateNestedManyWithoutPaiementInput
  }

  export type PaiementUncheckedCreateWithoutVenteInput = {
    id?: number
    montant: number
    moyen_paiement?: $Enums.MoyenPaiment
    createdAt?: Date | string
    updatedAt?: Date | string
    Achat?: AchatUncheckedCreateNestedManyWithoutPaiementInput
  }

  export type PaiementCreateOrConnectWithoutVenteInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutVenteInput, PaiementUncheckedCreateWithoutVenteInput>
  }

  export type EntrepriseCreateWithoutVenteInput = {
    nom: string
    encronyme: string
    code_postale: string
    adresse: string
    tel: string
    site?: string | null
    email: string
    decription?: string | null
    logo?: string | null
  }

  export type EntrepriseUncheckedCreateWithoutVenteInput = {
    id?: number
    nom: string
    encronyme: string
    code_postale: string
    adresse: string
    tel: string
    site?: string | null
    email: string
    decription?: string | null
    logo?: string | null
  }

  export type EntrepriseCreateOrConnectWithoutVenteInput = {
    where: EntrepriseWhereUniqueInput
    create: XOR<EntrepriseCreateWithoutVenteInput, EntrepriseUncheckedCreateWithoutVenteInput>
  }

  export type UtilisateurCreateWithoutVenteInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adresse?: AdresseCreateNestedManyWithoutUtilisateurInput
    Contact?: ContactCreateNestedManyWithoutUtilisateurInput
    Produit?: ProduitCreateNestedManyWithoutUtilisateurInput
    Achat?: AchatCreateNestedManyWithoutAgentInput
  }

  export type UtilisateurUncheckedCreateWithoutVenteInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adresse?: AdresseUncheckedCreateNestedManyWithoutUtilisateurInput
    Contact?: ContactUncheckedCreateNestedManyWithoutUtilisateurInput
    Produit?: ProduitUncheckedCreateNestedManyWithoutUtilisateurInput
    Achat?: AchatUncheckedCreateNestedManyWithoutAgentInput
  }

  export type UtilisateurCreateOrConnectWithoutVenteInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutVenteInput, UtilisateurUncheckedCreateWithoutVenteInput>
  }

  export type FournisseurCreateWithoutVenteInput = {
    nom: string
    email: string
    code_postal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    adresse: AdresseCreateNestedOneWithoutFournisseurInput
    contact: ContactCreateNestedOneWithoutFournisseurInput
    Achat?: AchatCreateNestedManyWithoutFournisseurInput
  }

  export type FournisseurUncheckedCreateWithoutVenteInput = {
    id?: number
    nom: string
    email: string
    code_postal?: string | null
    adresseId: number
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Achat?: AchatUncheckedCreateNestedManyWithoutFournisseurInput
  }

  export type FournisseurCreateOrConnectWithoutVenteInput = {
    where: FournisseurWhereUniqueInput
    create: XOR<FournisseurCreateWithoutVenteInput, FournisseurUncheckedCreateWithoutVenteInput>
  }

  export type DetailVenteUpsertWithoutVenteInput = {
    update: XOR<DetailVenteUpdateWithoutVenteInput, DetailVenteUncheckedUpdateWithoutVenteInput>
    create: XOR<DetailVenteCreateWithoutVenteInput, DetailVenteUncheckedCreateWithoutVenteInput>
    where?: DetailVenteWhereInput
  }

  export type DetailVenteUpdateToOneWithWhereWithoutVenteInput = {
    where?: DetailVenteWhereInput
    data: XOR<DetailVenteUpdateWithoutVenteInput, DetailVenteUncheckedUpdateWithoutVenteInput>
  }

  export type DetailVenteUpdateWithoutVenteInput = {
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produit?: ProduitUpdateOneRequiredWithoutDetailVenteNestedInput
  }

  export type DetailVenteUncheckedUpdateWithoutVenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    produitId?: IntFieldUpdateOperationsInput | number
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementUpsertWithoutVenteInput = {
    update: XOR<PaiementUpdateWithoutVenteInput, PaiementUncheckedUpdateWithoutVenteInput>
    create: XOR<PaiementCreateWithoutVenteInput, PaiementUncheckedCreateWithoutVenteInput>
    where?: PaiementWhereInput
  }

  export type PaiementUpdateToOneWithWhereWithoutVenteInput = {
    where?: PaiementWhereInput
    data: XOR<PaiementUpdateWithoutVenteInput, PaiementUncheckedUpdateWithoutVenteInput>
  }

  export type PaiementUpdateWithoutVenteInput = {
    montant?: FloatFieldUpdateOperationsInput | number
    moyen_paiement?: EnumMoyenPaimentFieldUpdateOperationsInput | $Enums.MoyenPaiment
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Achat?: AchatUpdateManyWithoutPaiementNestedInput
  }

  export type PaiementUncheckedUpdateWithoutVenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    moyen_paiement?: EnumMoyenPaimentFieldUpdateOperationsInput | $Enums.MoyenPaiment
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Achat?: AchatUncheckedUpdateManyWithoutPaiementNestedInput
  }

  export type EntrepriseUpsertWithoutVenteInput = {
    update: XOR<EntrepriseUpdateWithoutVenteInput, EntrepriseUncheckedUpdateWithoutVenteInput>
    create: XOR<EntrepriseCreateWithoutVenteInput, EntrepriseUncheckedCreateWithoutVenteInput>
    where?: EntrepriseWhereInput
  }

  export type EntrepriseUpdateToOneWithWhereWithoutVenteInput = {
    where?: EntrepriseWhereInput
    data: XOR<EntrepriseUpdateWithoutVenteInput, EntrepriseUncheckedUpdateWithoutVenteInput>
  }

  export type EntrepriseUpdateWithoutVenteInput = {
    nom?: StringFieldUpdateOperationsInput | string
    encronyme?: StringFieldUpdateOperationsInput | string
    code_postale?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    decription?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EntrepriseUncheckedUpdateWithoutVenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    encronyme?: StringFieldUpdateOperationsInput | string
    code_postale?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    decription?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UtilisateurUpsertWithoutVenteInput = {
    update: XOR<UtilisateurUpdateWithoutVenteInput, UtilisateurUncheckedUpdateWithoutVenteInput>
    create: XOR<UtilisateurCreateWithoutVenteInput, UtilisateurUncheckedCreateWithoutVenteInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutVenteInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutVenteInput, UtilisateurUncheckedUpdateWithoutVenteInput>
  }

  export type UtilisateurUpdateWithoutVenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adresse?: AdresseUpdateManyWithoutUtilisateurNestedInput
    Contact?: ContactUpdateManyWithoutUtilisateurNestedInput
    Produit?: ProduitUpdateManyWithoutUtilisateurNestedInput
    Achat?: AchatUpdateManyWithoutAgentNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutVenteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adresse?: AdresseUncheckedUpdateManyWithoutUtilisateurNestedInput
    Contact?: ContactUncheckedUpdateManyWithoutUtilisateurNestedInput
    Produit?: ProduitUncheckedUpdateManyWithoutUtilisateurNestedInput
    Achat?: AchatUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type FournisseurUpsertWithoutVenteInput = {
    update: XOR<FournisseurUpdateWithoutVenteInput, FournisseurUncheckedUpdateWithoutVenteInput>
    create: XOR<FournisseurCreateWithoutVenteInput, FournisseurUncheckedCreateWithoutVenteInput>
    where?: FournisseurWhereInput
  }

  export type FournisseurUpdateToOneWithWhereWithoutVenteInput = {
    where?: FournisseurWhereInput
    data: XOR<FournisseurUpdateWithoutVenteInput, FournisseurUncheckedUpdateWithoutVenteInput>
  }

  export type FournisseurUpdateWithoutVenteInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: AdresseUpdateOneRequiredWithoutFournisseurNestedInput
    contact?: ContactUpdateOneRequiredWithoutFournisseurNestedInput
    Achat?: AchatUpdateManyWithoutFournisseurNestedInput
  }

  export type FournisseurUncheckedUpdateWithoutVenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    adresseId?: IntFieldUpdateOperationsInput | number
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Achat?: AchatUncheckedUpdateManyWithoutFournisseurNestedInput
  }

  export type ProduitCreateWithoutDetailAchatInput = {
    designation: string
    prix: number
    qtte?: number | null
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teneur: TeneurCreateNestedOneWithoutProduitInput
    utilisateur: UtilisateurCreateNestedOneWithoutProduitInput
    DetailVente?: DetailVenteCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutDetailAchatInput = {
    id?: number
    designation: string
    prix: number
    qtte?: number | null
    description: string
    teneurId: number
    utilisateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    DetailVente?: DetailVenteUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutDetailAchatInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutDetailAchatInput, ProduitUncheckedCreateWithoutDetailAchatInput>
  }

  export type AchatCreateWithoutDetailAchatInput = {
    statut: string
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseur: FournisseurCreateNestedOneWithoutAchatInput
    agent: UtilisateurCreateNestedOneWithoutAchatInput
    paiement: PaiementCreateNestedOneWithoutAchatInput
  }

  export type AchatUncheckedCreateWithoutDetailAchatInput = {
    id?: number
    statut: string
    fournisseurId: number
    total: number
    agentId: string
    paiementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchatCreateOrConnectWithoutDetailAchatInput = {
    where: AchatWhereUniqueInput
    create: XOR<AchatCreateWithoutDetailAchatInput, AchatUncheckedCreateWithoutDetailAchatInput>
  }

  export type AchatCreateManyDetailAchatInputEnvelope = {
    data: AchatCreateManyDetailAchatInput | AchatCreateManyDetailAchatInput[]
    skipDuplicates?: boolean
  }

  export type ProduitUpsertWithoutDetailAchatInput = {
    update: XOR<ProduitUpdateWithoutDetailAchatInput, ProduitUncheckedUpdateWithoutDetailAchatInput>
    create: XOR<ProduitCreateWithoutDetailAchatInput, ProduitUncheckedCreateWithoutDetailAchatInput>
    where?: ProduitWhereInput
  }

  export type ProduitUpdateToOneWithWhereWithoutDetailAchatInput = {
    where?: ProduitWhereInput
    data: XOR<ProduitUpdateWithoutDetailAchatInput, ProduitUncheckedUpdateWithoutDetailAchatInput>
  }

  export type ProduitUpdateWithoutDetailAchatInput = {
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teneur?: TeneurUpdateOneRequiredWithoutProduitNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutProduitNestedInput
    DetailVente?: DetailVenteUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutDetailAchatInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    teneurId?: IntFieldUpdateOperationsInput | number
    utilisateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetailVente?: DetailVenteUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type AchatUpsertWithWhereUniqueWithoutDetailAchatInput = {
    where: AchatWhereUniqueInput
    update: XOR<AchatUpdateWithoutDetailAchatInput, AchatUncheckedUpdateWithoutDetailAchatInput>
    create: XOR<AchatCreateWithoutDetailAchatInput, AchatUncheckedCreateWithoutDetailAchatInput>
  }

  export type AchatUpdateWithWhereUniqueWithoutDetailAchatInput = {
    where: AchatWhereUniqueInput
    data: XOR<AchatUpdateWithoutDetailAchatInput, AchatUncheckedUpdateWithoutDetailAchatInput>
  }

  export type AchatUpdateManyWithWhereWithoutDetailAchatInput = {
    where: AchatScalarWhereInput
    data: XOR<AchatUpdateManyMutationInput, AchatUncheckedUpdateManyWithoutDetailAchatInput>
  }

  export type FournisseurCreateWithoutAchatInput = {
    nom: string
    email: string
    code_postal?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    adresse: AdresseCreateNestedOneWithoutFournisseurInput
    contact: ContactCreateNestedOneWithoutFournisseurInput
    Vente?: VenteCreateNestedManyWithoutFournisseurInput
  }

  export type FournisseurUncheckedCreateWithoutAchatInput = {
    id?: number
    nom: string
    email: string
    code_postal?: string | null
    adresseId: number
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Vente?: VenteUncheckedCreateNestedManyWithoutFournisseurInput
  }

  export type FournisseurCreateOrConnectWithoutAchatInput = {
    where: FournisseurWhereUniqueInput
    create: XOR<FournisseurCreateWithoutAchatInput, FournisseurUncheckedCreateWithoutAchatInput>
  }

  export type DetailAchatCreateWithoutAchatInput = {
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    produit: ProduitCreateNestedOneWithoutDetailAchatInput
  }

  export type DetailAchatUncheckedCreateWithoutAchatInput = {
    id?: number
    produitId: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DetailAchatCreateOrConnectWithoutAchatInput = {
    where: DetailAchatWhereUniqueInput
    create: XOR<DetailAchatCreateWithoutAchatInput, DetailAchatUncheckedCreateWithoutAchatInput>
  }

  export type UtilisateurCreateWithoutAchatInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adresse?: AdresseCreateNestedManyWithoutUtilisateurInput
    Contact?: ContactCreateNestedManyWithoutUtilisateurInput
    Produit?: ProduitCreateNestedManyWithoutUtilisateurInput
    Vente?: VenteCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutAchatInput = {
    id: string
    email: string
    nom: string
    postnom: string
    nom_complet?: string | null
    sexe?: $Enums.Sexe | null
    role?: $Enums.Role
    poste?: $Enums.Poste | null
    picture?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Adresse?: AdresseUncheckedCreateNestedManyWithoutUtilisateurInput
    Contact?: ContactUncheckedCreateNestedManyWithoutUtilisateurInput
    Produit?: ProduitUncheckedCreateNestedManyWithoutUtilisateurInput
    Vente?: VenteUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutAchatInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutAchatInput, UtilisateurUncheckedCreateWithoutAchatInput>
  }

  export type PaiementCreateWithoutAchatInput = {
    montant: number
    moyen_paiement?: $Enums.MoyenPaiment
    createdAt?: Date | string
    updatedAt?: Date | string
    Vente?: VenteCreateNestedManyWithoutPeiementInput
  }

  export type PaiementUncheckedCreateWithoutAchatInput = {
    id?: number
    montant: number
    moyen_paiement?: $Enums.MoyenPaiment
    createdAt?: Date | string
    updatedAt?: Date | string
    Vente?: VenteUncheckedCreateNestedManyWithoutPeiementInput
  }

  export type PaiementCreateOrConnectWithoutAchatInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutAchatInput, PaiementUncheckedCreateWithoutAchatInput>
  }

  export type FournisseurUpsertWithoutAchatInput = {
    update: XOR<FournisseurUpdateWithoutAchatInput, FournisseurUncheckedUpdateWithoutAchatInput>
    create: XOR<FournisseurCreateWithoutAchatInput, FournisseurUncheckedCreateWithoutAchatInput>
    where?: FournisseurWhereInput
  }

  export type FournisseurUpdateToOneWithWhereWithoutAchatInput = {
    where?: FournisseurWhereInput
    data: XOR<FournisseurUpdateWithoutAchatInput, FournisseurUncheckedUpdateWithoutAchatInput>
  }

  export type FournisseurUpdateWithoutAchatInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: AdresseUpdateOneRequiredWithoutFournisseurNestedInput
    contact?: ContactUpdateOneRequiredWithoutFournisseurNestedInput
    Vente?: VenteUpdateManyWithoutFournisseurNestedInput
  }

  export type FournisseurUncheckedUpdateWithoutAchatInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    adresseId?: IntFieldUpdateOperationsInput | number
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vente?: VenteUncheckedUpdateManyWithoutFournisseurNestedInput
  }

  export type DetailAchatUpsertWithoutAchatInput = {
    update: XOR<DetailAchatUpdateWithoutAchatInput, DetailAchatUncheckedUpdateWithoutAchatInput>
    create: XOR<DetailAchatCreateWithoutAchatInput, DetailAchatUncheckedCreateWithoutAchatInput>
    where?: DetailAchatWhereInput
  }

  export type DetailAchatUpdateToOneWithWhereWithoutAchatInput = {
    where?: DetailAchatWhereInput
    data: XOR<DetailAchatUpdateWithoutAchatInput, DetailAchatUncheckedUpdateWithoutAchatInput>
  }

  export type DetailAchatUpdateWithoutAchatInput = {
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produit?: ProduitUpdateOneRequiredWithoutDetailAchatNestedInput
  }

  export type DetailAchatUncheckedUpdateWithoutAchatInput = {
    id?: IntFieldUpdateOperationsInput | number
    produitId?: IntFieldUpdateOperationsInput | number
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUpsertWithoutAchatInput = {
    update: XOR<UtilisateurUpdateWithoutAchatInput, UtilisateurUncheckedUpdateWithoutAchatInput>
    create: XOR<UtilisateurCreateWithoutAchatInput, UtilisateurUncheckedCreateWithoutAchatInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutAchatInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutAchatInput, UtilisateurUncheckedUpdateWithoutAchatInput>
  }

  export type UtilisateurUpdateWithoutAchatInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adresse?: AdresseUpdateManyWithoutUtilisateurNestedInput
    Contact?: ContactUpdateManyWithoutUtilisateurNestedInput
    Produit?: ProduitUpdateManyWithoutUtilisateurNestedInput
    Vente?: VenteUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutAchatInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    postnom?: StringFieldUpdateOperationsInput | string
    nom_complet?: NullableStringFieldUpdateOperationsInput | string | null
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    poste?: NullableEnumPosteFieldUpdateOperationsInput | $Enums.Poste | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Adresse?: AdresseUncheckedUpdateManyWithoutUtilisateurNestedInput
    Contact?: ContactUncheckedUpdateManyWithoutUtilisateurNestedInput
    Produit?: ProduitUncheckedUpdateManyWithoutUtilisateurNestedInput
    Vente?: VenteUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type PaiementUpsertWithoutAchatInput = {
    update: XOR<PaiementUpdateWithoutAchatInput, PaiementUncheckedUpdateWithoutAchatInput>
    create: XOR<PaiementCreateWithoutAchatInput, PaiementUncheckedCreateWithoutAchatInput>
    where?: PaiementWhereInput
  }

  export type PaiementUpdateToOneWithWhereWithoutAchatInput = {
    where?: PaiementWhereInput
    data: XOR<PaiementUpdateWithoutAchatInput, PaiementUncheckedUpdateWithoutAchatInput>
  }

  export type PaiementUpdateWithoutAchatInput = {
    montant?: FloatFieldUpdateOperationsInput | number
    moyen_paiement?: EnumMoyenPaimentFieldUpdateOperationsInput | $Enums.MoyenPaiment
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vente?: VenteUpdateManyWithoutPeiementNestedInput
  }

  export type PaiementUncheckedUpdateWithoutAchatInput = {
    id?: IntFieldUpdateOperationsInput | number
    montant?: FloatFieldUpdateOperationsInput | number
    moyen_paiement?: EnumMoyenPaimentFieldUpdateOperationsInput | $Enums.MoyenPaiment
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vente?: VenteUncheckedUpdateManyWithoutPeiementNestedInput
  }

  export type VenteCreateManyEntrepriseInput = {
    id?: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    detailVenteId: number
    paiementId: number
    clientId: string
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseurId?: number | null
  }

  export type VenteUpdateWithoutEntrepriseInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailvente?: DetailVenteUpdateOneRequiredWithoutVenteNestedInput
    peiement?: PaiementUpdateOneRequiredWithoutVenteNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutVenteNestedInput
    Fournisseur?: FournisseurUpdateOneWithoutVenteNestedInput
  }

  export type VenteUncheckedUpdateWithoutEntrepriseInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    detailVenteId?: IntFieldUpdateOperationsInput | number
    paiementId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VenteUncheckedUpdateManyWithoutEntrepriseInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    detailVenteId?: IntFieldUpdateOperationsInput | number
    paiementId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AdresseCreateManyUtilisateurInput = {
    id?: number
    ville: string
    commune: string
    adresse: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactCreateManyUtilisateurInput = {
    id?: number
    tel: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProduitCreateManyUtilisateurInput = {
    id?: number
    designation: string
    prix: number
    qtte?: number | null
    description: string
    teneurId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenteCreateManyUtilisateurInput = {
    id?: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    detailVenteId: number
    paiementId: number
    entrepriseId: number
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseurId?: number | null
  }

  export type AchatCreateManyAgentInput = {
    id?: number
    statut: string
    fournisseurId: number
    total: number
    detailAchatId: number
    paiementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdresseUpdateWithoutUtilisateurInput = {
    ville?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Fournisseur?: FournisseurUpdateManyWithoutAdresseNestedInput
  }

  export type AdresseUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    ville?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Fournisseur?: FournisseurUncheckedUpdateManyWithoutAdresseNestedInput
  }

  export type AdresseUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    ville?: StringFieldUpdateOperationsInput | string
    commune?: StringFieldUpdateOperationsInput | string
    adresse?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUpdateWithoutUtilisateurInput = {
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Fournisseur?: FournisseurUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Fournisseur?: FournisseurUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    tel?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduitUpdateWithoutUtilisateurInput = {
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teneur?: TeneurUpdateOneRequiredWithoutProduitNestedInput
    DetailVente?: DetailVenteUpdateManyWithoutProduitNestedInput
    DetailAchat?: DetailAchatUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    teneurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetailVente?: DetailVenteUncheckedUpdateManyWithoutProduitNestedInput
    DetailAchat?: DetailAchatUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    teneurId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenteUpdateWithoutUtilisateurInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailvente?: DetailVenteUpdateOneRequiredWithoutVenteNestedInput
    peiement?: PaiementUpdateOneRequiredWithoutVenteNestedInput
    entreprise?: EntrepriseUpdateOneRequiredWithoutVenteNestedInput
    Fournisseur?: FournisseurUpdateOneWithoutVenteNestedInput
  }

  export type VenteUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    detailVenteId?: IntFieldUpdateOperationsInput | number
    paiementId?: IntFieldUpdateOperationsInput | number
    entrepriseId?: IntFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VenteUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    detailVenteId?: IntFieldUpdateOperationsInput | number
    paiementId?: IntFieldUpdateOperationsInput | number
    entrepriseId?: IntFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AchatUpdateWithoutAgentInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseur?: FournisseurUpdateOneRequiredWithoutAchatNestedInput
    detailAchat?: DetailAchatUpdateOneRequiredWithoutAchatNestedInput
    paiement?: PaiementUpdateOneRequiredWithoutAchatNestedInput
  }

  export type AchatUncheckedUpdateWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    fournisseurId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    detailAchatId?: IntFieldUpdateOperationsInput | number
    paiementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchatUncheckedUpdateManyWithoutAgentInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    fournisseurId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    detailAchatId?: IntFieldUpdateOperationsInput | number
    paiementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FournisseurCreateManyAdresseInput = {
    id?: number
    nom: string
    email: string
    code_postal?: string | null
    contactId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FournisseurUpdateWithoutAdresseInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUpdateOneRequiredWithoutFournisseurNestedInput
    Vente?: VenteUpdateManyWithoutFournisseurNestedInput
    Achat?: AchatUpdateManyWithoutFournisseurNestedInput
  }

  export type FournisseurUncheckedUpdateWithoutAdresseInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vente?: VenteUncheckedUpdateManyWithoutFournisseurNestedInput
    Achat?: AchatUncheckedUpdateManyWithoutFournisseurNestedInput
  }

  export type FournisseurUncheckedUpdateManyWithoutAdresseInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    contactId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FournisseurCreateManyContactInput = {
    id?: number
    nom: string
    email: string
    code_postal?: string | null
    adresseId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FournisseurUpdateWithoutContactInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adresse?: AdresseUpdateOneRequiredWithoutFournisseurNestedInput
    Vente?: VenteUpdateManyWithoutFournisseurNestedInput
    Achat?: AchatUpdateManyWithoutFournisseurNestedInput
  }

  export type FournisseurUncheckedUpdateWithoutContactInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    adresseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vente?: VenteUncheckedUpdateManyWithoutFournisseurNestedInput
    Achat?: AchatUncheckedUpdateManyWithoutFournisseurNestedInput
  }

  export type FournisseurUncheckedUpdateManyWithoutContactInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    code_postal?: NullableStringFieldUpdateOperationsInput | string | null
    adresseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenteCreateManyFournisseurInput = {
    id?: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    detailVenteId: number
    paiementId: number
    entrepriseId: number
    clientId: string
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchatCreateManyFournisseurInput = {
    id?: number
    statut: string
    total: number
    detailAchatId: number
    agentId: string
    paiementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenteUpdateWithoutFournisseurInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailvente?: DetailVenteUpdateOneRequiredWithoutVenteNestedInput
    peiement?: PaiementUpdateOneRequiredWithoutVenteNestedInput
    entreprise?: EntrepriseUpdateOneRequiredWithoutVenteNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutVenteNestedInput
  }

  export type VenteUncheckedUpdateWithoutFournisseurInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    detailVenteId?: IntFieldUpdateOperationsInput | number
    paiementId?: IntFieldUpdateOperationsInput | number
    entrepriseId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenteUncheckedUpdateManyWithoutFournisseurInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    detailVenteId?: IntFieldUpdateOperationsInput | number
    paiementId?: IntFieldUpdateOperationsInput | number
    entrepriseId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchatUpdateWithoutFournisseurInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailAchat?: DetailAchatUpdateOneRequiredWithoutAchatNestedInput
    agent?: UtilisateurUpdateOneRequiredWithoutAchatNestedInput
    paiement?: PaiementUpdateOneRequiredWithoutAchatNestedInput
  }

  export type AchatUncheckedUpdateWithoutFournisseurInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    detailAchatId?: IntFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    paiementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchatUncheckedUpdateManyWithoutFournisseurInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    detailAchatId?: IntFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    paiementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduitCreateManyTeneurInput = {
    id?: number
    designation: string
    prix: number
    qtte?: number | null
    description: string
    utilisateurId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProduitUpdateWithoutTeneurInput = {
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutProduitNestedInput
    DetailVente?: DetailVenteUpdateManyWithoutProduitNestedInput
    DetailAchat?: DetailAchatUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutTeneurInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetailVente?: DetailVenteUncheckedUpdateManyWithoutProduitNestedInput
    DetailAchat?: DetailAchatUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateManyWithoutTeneurInput = {
    id?: IntFieldUpdateOperationsInput | number
    designation?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    qtte?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    utilisateurId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailVenteCreateManyProduitInput = {
    id?: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DetailAchatCreateManyProduitInput = {
    id?: number
    qtte: number
    prixUnitaire: number
    prixTotal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DetailVenteUpdateWithoutProduitInput = {
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vente?: VenteUpdateManyWithoutDetailventeNestedInput
  }

  export type DetailVenteUncheckedUpdateWithoutProduitInput = {
    id?: IntFieldUpdateOperationsInput | number
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vente?: VenteUncheckedUpdateManyWithoutDetailventeNestedInput
  }

  export type DetailVenteUncheckedUpdateManyWithoutProduitInput = {
    id?: IntFieldUpdateOperationsInput | number
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailAchatUpdateWithoutProduitInput = {
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Achat?: AchatUpdateManyWithoutDetailAchatNestedInput
  }

  export type DetailAchatUncheckedUpdateWithoutProduitInput = {
    id?: IntFieldUpdateOperationsInput | number
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Achat?: AchatUncheckedUpdateManyWithoutDetailAchatNestedInput
  }

  export type DetailAchatUncheckedUpdateManyWithoutProduitInput = {
    id?: IntFieldUpdateOperationsInput | number
    qtte?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    prixTotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenteCreateManyDetailventeInput = {
    id?: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    paiementId: number
    entrepriseId: number
    clientId: string
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseurId?: number | null
  }

  export type VenteUpdateWithoutDetailventeInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peiement?: PaiementUpdateOneRequiredWithoutVenteNestedInput
    entreprise?: EntrepriseUpdateOneRequiredWithoutVenteNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutVenteNestedInput
    Fournisseur?: FournisseurUpdateOneWithoutVenteNestedInput
  }

  export type VenteUncheckedUpdateWithoutDetailventeInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    paiementId?: IntFieldUpdateOperationsInput | number
    entrepriseId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VenteUncheckedUpdateManyWithoutDetailventeInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    paiementId?: IntFieldUpdateOperationsInput | number
    entrepriseId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VenteCreateManyPeiementInput = {
    id?: number
    statut: string
    total_ttc: number
    total_ht: number
    remise: number
    detailVenteId: number
    entrepriseId: number
    clientId: string
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fournisseurId?: number | null
  }

  export type AchatCreateManyPaiementInput = {
    id?: number
    statut: string
    fournisseurId: number
    total: number
    detailAchatId: number
    agentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VenteUpdateWithoutPeiementInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailvente?: DetailVenteUpdateOneRequiredWithoutVenteNestedInput
    entreprise?: EntrepriseUpdateOneRequiredWithoutVenteNestedInput
    utilisateur?: UtilisateurUpdateOneRequiredWithoutVenteNestedInput
    Fournisseur?: FournisseurUpdateOneWithoutVenteNestedInput
  }

  export type VenteUncheckedUpdateWithoutPeiementInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    detailVenteId?: IntFieldUpdateOperationsInput | number
    entrepriseId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type VenteUncheckedUpdateManyWithoutPeiementInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    total_ttc?: FloatFieldUpdateOperationsInput | number
    total_ht?: FloatFieldUpdateOperationsInput | number
    remise?: FloatFieldUpdateOperationsInput | number
    detailVenteId?: IntFieldUpdateOperationsInput | number
    entrepriseId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AchatUpdateWithoutPaiementInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseur?: FournisseurUpdateOneRequiredWithoutAchatNestedInput
    detailAchat?: DetailAchatUpdateOneRequiredWithoutAchatNestedInput
    agent?: UtilisateurUpdateOneRequiredWithoutAchatNestedInput
  }

  export type AchatUncheckedUpdateWithoutPaiementInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    fournisseurId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    detailAchatId?: IntFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchatUncheckedUpdateManyWithoutPaiementInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    fournisseurId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    detailAchatId?: IntFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchatCreateManyDetailAchatInput = {
    id?: number
    statut: string
    fournisseurId: number
    total: number
    agentId: string
    paiementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AchatUpdateWithoutDetailAchatInput = {
    statut?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fournisseur?: FournisseurUpdateOneRequiredWithoutAchatNestedInput
    agent?: UtilisateurUpdateOneRequiredWithoutAchatNestedInput
    paiement?: PaiementUpdateOneRequiredWithoutAchatNestedInput
  }

  export type AchatUncheckedUpdateWithoutDetailAchatInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    fournisseurId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    paiementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchatUncheckedUpdateManyWithoutDetailAchatInput = {
    id?: IntFieldUpdateOperationsInput | number
    statut?: StringFieldUpdateOperationsInput | string
    fournisseurId?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    agentId?: StringFieldUpdateOperationsInput | string
    paiementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}