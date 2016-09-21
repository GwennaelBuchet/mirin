/**
 * Created by gwen on 10/08/16.
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AgendaService} from "./agenda.service";

@Component({
    selector: 'agenda',
    templateUrl: 'app/agenda/agenda.component.html',
    styleUrls: ['app/agenda/css/agenda.component.css']
})
export class AgendaComponent implements OnInit {

    calendar = {
        items: [
            {
                created: "2016-08-25T09:51:23.000Z",
                creator: {
                    displayName: "Gwennael Buchet",
                    email: "gwennael.buchet@zenika.com",
                    self: true
                },
                end: {
                    dateTime: "2016-08-26T00:00:00+02:00"
                },
                etag: "\"2944237367580000\"",
                hangoutLink: "https://plus.google.com/hangouts/_/zenika.com/gwennael-buchet?hceid=Z3dlbm5hZWwuYnVjaGV0QHplbmlrYS5jb20.k5553l2uov328t6mtc8crljgbg",
                htmlLink: "https://www.google.com/calendar/event?eid=azU1NTNsMnVvdjMyOHQ2bXRjOGNybGpnYmcgZ3dlbm5hZWwuYnVjaGV0QHplbmlrYS5jb20",
                iCalUID: "k5553l2uov328t6mtc8crljgbg@google.com",
                id: "k5553l2uov328t6mtc8crljgbg",
                kind: "calendar#event",
                organizer: {
                    displayName: "Gwennael Buchet",
                    email: "gwennael.buchet@zenika.com",
                    self: true
                },
                reminders: {
                    useDefault: true
                },
                start: {
                    dateTime: "2016-08-25T23:00:00+02:00"
                },
                status: "confirmed",
                summary: "test 2",
                updated: "2016-08-25T09:51:23.790Z"
            }
        ]
    };

    constructor(private agendaService: AgendaService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getCurrent();
    }

    getCurrent() {
        //noinspection TypeScriptUnresolvedFunction
        this.agendaService.getCurrentDay().then(c => {
            this.calendar = c;
        });
    }

}
