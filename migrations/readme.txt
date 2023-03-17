Migraciones:

1 - Actualizar la lista de entidades en el fichero 'listEntities.config.ts'

2 - Generar la migración con el comando siguiente:
npm run migration-generate ./migrations/NombreDeLaMigracionQueDeses

3 - Actualizar la lista de migraciones en el fichero 'listMigrations.config.ts'

4 - Correr o revertir la migración con los comandos siguientes:
npm run migrations-run
npm run migration-revert