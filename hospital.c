#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct Patient {
    int id;
    char name[50];
    int age;
    int doctor_id;
    struct Patient* next;
} PT;

PT* head = NULL;

void addPatient(int id, char name[], int age, int doc) {
    PT* p = (PT*)malloc(sizeof(PT));
    p->id = id;
    strcpy(p->name, name);
    p->age = age;
    p->doctor_id = doc;
    p->next = head;
    head = p;
}

typedef struct Doctor {
    int id;
    char name[50];
    char spec[50];
    struct Doctor* next;
} Doc;

Doc* dhead = NULL;

void addDoctor(int id, char name[], char spec[]) {
    Doc* d = (Doc*)malloc(sizeof(Doc));
    d->id = id;
    strcpy(d->name, name);
    strcpy(d->spec, spec);
    d->next = dhead;
    dhead = d;
}


typedef struct Appointment {
    int pid, did;
    struct Appointment* next;
} AP;

AP *F=NULL, *R=NULL;

void bookAppointment(int pid, int did) {
    AP* a = (AP*)malloc(sizeof(AP));
    a->pid = pid;
    a->did = did;
    a->next = NULL;

    if(R==NULL) F=R=a;
    else {
        R->next = a;
        R = a;
    }
}

typedef struct Bill {
    int pid, total;
    struct Bill* next;
} Bill;

Bill* top = NULL;

void addBill(int pid, int total) {
    Bill* b = (Bill*)malloc(sizeof(Bill));
    b->pid = pid;
    b->total = total;
    b->next = top;
    top = b;
}

int main() {
    printf("Hospital Management Backend Running...\n");
    return 0;
}