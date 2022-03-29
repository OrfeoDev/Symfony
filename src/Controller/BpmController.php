<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BpmController extends AbstractController
{
    #[Route('/bpm', name: 'bpm')]
    public function index(): Response
    {
        return $this->render('bpm/index.html.twig', [
            'controller_name' => 'BpmController',
        ]);
    }
}
