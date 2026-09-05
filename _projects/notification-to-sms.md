---
title: Notification to SMS Forwarder
summary: An Android app that forwards notifications from one phone to another as SMS, built around the problem of staying alive on a system designed to kill it.
tools: [Kotlin, Android SDK, WorkManager]
featured: true
order: 8
---

## The problem

I wanted notifications from a phone I was not carrying to reach the one I was. SMS is the right transport for that, because it arrives without the sending device needing a data connection the receiving device can also reach.

Android makes this harder than it sounds. A notification listener is exactly the kind of long lived background process the system is built to shut down, particularly once battery optimization takes an interest, and it does not restart itself after a reboot. An app like this is only useful if it is running, and the default outcome is that it quietly is not.

## What I built

A Kotlin app that reads posted notifications and sends the package name, title, and body to a configured number.

Most of the work went into deciding what not to send. Forwarding everything floods the receiving phone and costs money per message, so the app carries an app level allow list, chosen from installed user or system apps through a searchable picker or typed in by hand. On top of that there are filters for the categories that generate the most noise: notifications with an empty title or empty body get dropped, low battery alerts are limited to the 15, 10, and 5 percent thresholds instead of every step down, and Google Play installation progress is excluded because it updates continuously while an install runs. Preferences persist so the configuration survives restarts.

The reliability side is the part that matters. The app asks for notification access and for exemption from battery optimization, then polls after you return from the system settings screen so the prompts disappear the moment permission is actually granted, rather than waiting for a restart to notice. A boot receiver re-registers a periodic background check every fifteen minutes to confirm the listener is still alive, and the service runs in the foreground so the system treats it as something the user is aware of.

## The result

Notifications arrive on the second phone as text messages, filtered down to the ones worth interrupting someone for. The permission and keep alive handling is what makes it usable day to day, since the interesting failure was never the forwarding logic, it was the service being dead when something finally happened.
