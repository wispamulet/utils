## README

Trying to develop React Native apps in WSL2 while connect to Android emulator running on Windows

### Prerequisites

Follow this gist <[link](https://gist.github.com/bergmannjg/461958db03c6ae41a66d264ae6504ade)> for detail explanations.

### Workflow

1. Open Android emulator on windows

```powershell
# powershell

# the directory of emulator may look like this, and device name depends on which virtual device you have installed
# you might need save this to a .bat file to run
"C:\Users\<user>\AppData\Local\Android\Sdk\emulator\emulator.exe" -avd Pixel_2_API_30
```

2. Run adb server on windows

```powershell
# powershell

adb kill-server
adb -a nodaemon server start
```

3. Enable access to metro bundler from windows (skip this step if needed)

```powershell
# powershell

iex "netsh interface portproxy delete v4tov4 listenport=19001 listenaddress=127.0.0.1" | out-null;
$WSL_CLIENT = bash.exe -c "ifconfig eth0 | grep 'inet '";
$WSL_CLIENT -match '\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}';
$WSL_CLIENT = $matches[0];
iex "netsh interface portproxy add v4tov4 listenport=19001 listenaddress=127.0.0.1 connectport=19001 connectaddress=$WSL_CLIENT"
```

4. Use socat to relay requests from wsl2 to windows

```sh
# shell

socat -d -d TCP-LISTEN:5037,reuseaddr,fork TCP:$(cat /etc/resolv.conf | tail -n1 | cut -d " " -f 2):5037
```

5. Run your React Native app
