setInterval(() => {
  const playerPed = PlayerPedId();
  const vehicle = GetVehiclePedIsUsing(playerPed);

  if (IsPedInVehicle(playerPed, vehicle, false)) {
    if (GetVehicleClass(vehicle) === 18) {
      const driverPed = GetPedInVehicleSeat(vehicle, -1);
      const passengerPed = GetPedInVehicleSeat(vehicle, 0);

      if (driverPed !== playerPed && passengerPed !== playerPed) {
        if (IsVehicleSeatFree(vehicle, -1)) {
          DisableControlAction(0, 75, true); // Disable exit vehicle control
          if (IsDisabledControlJustPressed(0, 75)) {
            ShowNotification("~r~Backseats are missing the door handles!.");
          }
        }
      }
    }
  }
}, 0);

/**
 * Displays a notification with the given text.
 *
 * @param {string} text - The text to be displayed in the notification.
 */
function ShowNotification(text) {
  SetNotificationTextEntry("STRING");
  AddTextComponentString(text);
  DrawNotification(false, false);
}
