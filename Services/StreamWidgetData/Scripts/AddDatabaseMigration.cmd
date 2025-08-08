cd..
dotnet ef migrations add InitialAddDatabaseMigration --project StreamWidgetData.csproj --context StreamWidgetDatabaseContext --startup-project ../StreamWidgetsAPI/StreamWidgetsAPI.csproj --output-dir Migrations
pause