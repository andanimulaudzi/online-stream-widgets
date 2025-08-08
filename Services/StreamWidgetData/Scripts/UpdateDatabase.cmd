
set ASPNETCORE_ENVIRONMENT=Developer
cd..
dotnet ef database update --project StreamWidgetData.csproj --context StreamWidgetDatabaseContext --startup-project ../StreamWidgetsAPI/StreamWidgetsAPI.csproj
pause